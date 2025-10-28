import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    if (!body.amount || isNaN(body.amount)) {
      console.error("Invalid amount received:", body.amount);
      return new Response(JSON.stringify({ error: "Invalid amount" }), { status: 400 });
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: body.amount, // amount in paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };


    console.log("Creating Razorpay order with options:", options);

    const order = await instance.orders.create(options);

    console.log("Razorpay order created:", order);

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Razorpay backend error:", error); // log full object
    return new Response(JSON.stringify({ error: error?.message || "Unknown error" }), { status: 500 });
  }
}
