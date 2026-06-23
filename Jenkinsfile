pipeline {
    agent any

    environment {
        VPS_IP = "193.203.163.140"

        NEW_DIR = "/var/www/electrical-mechanical-website-new"
        CURRENT_DIR = "/var/www/electrical-mechanical-website-current"
        BACKUP_DIR = "/var/www/electrical-mechanical-website-backup"

        APP_NAME = "electrical-mechanical-website"
        API_NAME = "maketronics-api"
    }

    stages {

        stage('Stop if Not Main') {
            when {
                not { branch 'main' }
            }
            steps {
                echo "⛔ Not main branch. Stopping pipeline."
                script {
                    currentBuild.result = 'NOT_BUILT'
                    error("Stopping execution for non-main branch")
                }
            }
        }

        stage('Deploy to VPS') {
            when { branch 'main' }

            steps {
                sh """
                ssh -o StrictHostKeyChecking=no root@${VPS_IP} '
                    set -e

                    echo "🚀 Starting deployment..."

                    # ----------------------------
                    # CLEAN NEW BUILD
                    # ----------------------------
                    rm -rf ${NEW_DIR}
                    rm -rf /tmp/deploy-package

                    # ----------------------------
                    # CLONE EXACT TRIGGERED COMMIT
                    # ----------------------------
                    git clone git@github.com:maketronics/electrical-mechanical-website.git ${NEW_DIR}
                    cd ${NEW_DIR}
                    git checkout ${GIT_COMMIT}
                    echo "Deploying commit: ${GIT_COMMIT}"

                    # ----------------------------
                    # LOAD NVM + NODE 20
                    # ----------------------------
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && . "\$NVM_DIR/nvm.sh"

                    nvm install 20
                    nvm use 20

                    node -v

                    # ----------------------------
                    # BUILD FRONTEND (ONLY DIST)
                    # ----------------------------
                    cd ${NEW_DIR}/frontend

                    rm -rf node_modules
                    if [ -f package-lock.json ]; then
                        npm ci
                    else
                        npm install
                    fi
                    npm run build

                    echo "✅ Frontend build success"

                    # ----------------------------
                    # PREPARE SERVER
                    # ----------------------------
                    cd ${NEW_DIR}/server
                    if [ -f package-lock.json ]; then
                        npm ci
                    else
                        npm install
                    fi

                    echo "✅ Server ready"

                    # ----------------------------
                    # CREATE DEPLOY PACKAGE
                    # ----------------------------
                    mkdir -p /tmp/deploy-package

                    cp -r ${NEW_DIR}/frontend/dist /tmp/deploy-package/frontend
                    cp -r ${NEW_DIR}/server /tmp/deploy-package/server

                    # ----------------------------
                    # BACKUP CURRENT
                    # ----------------------------
                    rm -rf ${BACKUP_DIR} || true
                    mv ${CURRENT_DIR} ${BACKUP_DIR} || true

                    # ----------------------------
                    # DEPLOY NEW VERSION
                    # ----------------------------
                    mkdir -p ${CURRENT_DIR}

                    cp -r /tmp/deploy-package/frontend ${CURRENT_DIR}/
                    cp -r /tmp/deploy-package/server ${CURRENT_DIR}/

                    # ----------------------------
                    # START / RESTART SERVICES
                    # ----------------------------
                    cd ${CURRENT_DIR}/server
                    pm2 restart ${API_NAME} || pm2 start index.js --name ${API_NAME}

                    cd ${CURRENT_DIR}
                    sudo systemctl restart nginx

                    echo "🎉 Deployment successful"

                    # ----------------------------
                    # CLEANUP AFTER SUCCESS
                    # ----------------------------
                    rm -rf ${BACKUP_DIR}
                    rm -rf ${NEW_DIR}
                    rm -rf /tmp/deploy-package
                '
                """
            }
        }
    }

    post {

        success {
            echo "✅ Deployment successful"
        }

        failure {
            echo "❌ Deployment failed → rolling back"

            sh """
            ssh -o StrictHostKeyChecking=no root@${VPS_IP} '
                set -e

                if [ -d "${BACKUP_DIR}" ]; then
                    echo "♻️ Restoring previous version..."

                    rm -rf ${CURRENT_DIR}
                    mv ${BACKUP_DIR} ${CURRENT_DIR}

                    cd ${CURRENT_DIR}/server
                    pm2 restart ${API_NAME}

                    cd ${CURRENT_DIR}
                    pm2 restart ${APP_NAME}

                    echo "✅ Rollback completed"
                else
                    echo "⚠️ No backup found, nothing to rollback"
                fi

                # cleanup temp even on failure
                rm -rf ${NEW_DIR}
                rm -rf /tmp/deploy-package
            '
            """
        }
    }
}