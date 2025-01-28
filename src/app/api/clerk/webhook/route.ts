export const POST = async (req: Request) => {
  const { data } = await req.json();
  console.log("clerk webhook Recieved", data);

  return new Response("webhook recieve", { status: 200 });
};
