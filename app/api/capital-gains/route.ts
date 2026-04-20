import { NextResponse } from "next/server";
import { capitalGains } from "@/data/capitalgains";

export async function GET() {
  return NextResponse.json(capitalGains);
}
