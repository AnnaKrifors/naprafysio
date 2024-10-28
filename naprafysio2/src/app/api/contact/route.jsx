import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  console.log("Username:", username); // Detta ska nu ge rätt värde
  console.log("Password:", password); // Detta ska nu ge rätt värde
  console.log("Personal Email:", myEmail); // Detta ska nu ge rätt värde

  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Received form data:", { name, email, message }); // Logga mottagen data

    const transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: username,
        pass: password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Skicka mejlet
    const mailOptions = {
      from: `Naprafysio🩵 ${myEmail}`,
      // Använd din personliga e-post
      to: email, // Skicka till din egen e-post
      replyTo: myEmail,
      subject: `Tack för din förfrågan, ${name}!`,
      html: `

<div style="padding: 20px; width: 400px; border-radius: 8px; font-size: 16px; font-family: Arial, sans-serif; background-color: #ffffff; color: #333; text-align: left;">
  
  <h2 style="color: #0892a5; font-size: 24px; margin-bottom: 15px;">Tack för din förfrågan!</h2> 

  <p style="color: #333; line-height: 1.5;">
    Vi på <span style="font-weight: bold;">Naprafysio</span> återkommer till dig så snart vi kan för att boka in en tid för din behandling.
  </p>
  
  <p style="color: #333; line-height: 1.5;">
    Vid akuta ärenden, ring oss på <strong style="color: #0892a5;">073-9675143</strong>.
  </p>
  
  <div style="margin-top: 20px;">
    <p style="margin: 0;">Vi återkommer till dig på:</p>
    <p style="font-weight: bold; color: #0892a5; margin: 0;">${email}</p>
  </div>

  <div style="margin-top: 20px;">
    <h3 style="color: #0892a5; margin-bottom: 10px; font-size: 18px;">Ditt meddelande:</h3>
    <p style="padding: 10px 0; color: #333; border-bottom: 1px solid #ccc;">${message}</p>
  </div>

  <p style="margin-top: 20px; color: #333;">Tack!</p> 
</div>


`,
    };

    console.log("Sending email with options:", mailOptions); // Logga mailalternativ
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending email:", error); // Logga felet
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
