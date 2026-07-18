export async function onRequest(context) {
  const { env } = context;

  const response = await fetch(env.RG_ENDPT_URL, {
    headers: {
      Authorization: env.RG_API_KEY,
    },
  });

  const data = await response.json();

  return Response.json(data);
}
