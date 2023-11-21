export default async () => {
  const myEnv = Netlify.env.get("MY_ENV");

  return new Response(`hello world! I care about the ${myEnv}`);
};

export const config = {
  path: ["/api/hello-world"]
}