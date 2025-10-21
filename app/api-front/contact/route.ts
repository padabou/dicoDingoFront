import { NextResponse } from "next/server";
import {postContact} from "@/lib/contact/client";

export async function POST(request: Request) {

  const res = await request.json()
  const { verify } = res;

  if (!verify) {
    return res.status(400).json({ success: false, reason: "missing data" });
  }

  const { destX, left } = verify;
  let json;
  if(Math.abs(left - destX) < 5) {
    json = {
      message: "success captcha"
    };

    const contactResult = await postContact(res);

    if(contactResult.status === 200) {
      return NextResponse.json(json, { status: 200});
    }
    else {
      json = {
        message: "probleme  send message"
      };
      console.error("error " + JSON.stringify(contactResult));
      return NextResponse.json(json, { status: contactResult.status});
    }

  } else {
    json = {
      message: "failure captcha"
    };
    return NextResponse.json(json, { status: 400});
  }
}
