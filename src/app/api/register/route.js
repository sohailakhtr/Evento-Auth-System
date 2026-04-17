import DBconnect from "@/lib/db";
import User from "@/lib/models/user";
import { passwordHash } from "@/components/utils";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    console.log("API HIT:", email); 

    await DBconnect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json(
        { error: "Email is already in use" },
        { status: 400 },
      );
    }

    const hashedPass = await passwordHash(password);

    const newUser = await User.create({
      email,
      password: hashedPass,
    });

    console.log("USER SAVED:", newUser);

    return Response.json(
      {
        success: true,
        user: {
          _id: newUser._id,
          email: newUser.email,
        },
      },
      { status: 201 },
    );
  } catch (err) {
    console.log("ERROR:", err);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}
