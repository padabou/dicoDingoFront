import { NextResponse } from "next/server";
import { postContact } from "@/lib/contact/client";

export async function POST(request: Request) {
  const res = await request.json();
  const { username, email, message, cheatField } = res;

  if (cheatField) {
    return NextResponse.json(
      { success: false, reason: "spam detected" },
      { status: 406 }
    );
  }

  if (!username || !email || !message) {
    return NextResponse.json(
      { success: false, reason: "missing data" },
      { status: 406 }
    );
  }

  const contactResult = await postContact(res);

  if (contactResult.status === 200) {
    return NextResponse.json({ message: "success" }, { status: 200 });
  }

  console.error("error " + JSON.stringify(contactResult));
  return NextResponse.json(
    { message: "probleme send message" },
    { status: contactResult.status }
  );
}
