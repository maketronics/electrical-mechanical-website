import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    company: { type: String, default: '' },
    projectType: { type: String, default: '' },
    tph: { type: String, default: '' },
    feedRockBulkDensity: { type: String, default: '' },
    topFeedSize: { type: String, default: '' },
    clayMoisture: { type: String, default: '' },
    voltageFrequency: { type: String, default: '' },
    message: { type: String, default: '' },
    drawingsMeta: {
      count: { type: Number, default: 0 },
      names: [{ type: String }],
    },
    emailSent: { type: Boolean, default: false },
    emailError: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
