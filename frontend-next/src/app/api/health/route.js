import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    const mongoStatus = mongoose.connection.readyState;

    return NextResponse.json({
      success: true,
      status: "ok",
      mongo:
        mongoStatus === 1
          ? "connected"
          : mongoStatus === 2
          ? "connecting"
          : "disconnected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}