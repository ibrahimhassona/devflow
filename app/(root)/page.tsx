import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTE from "@/constants/route";

const Home = async () => {
  const session = await auth();
console.log(session)
  return (
    <>
      <h1 className="text-3xl font-black">Welcome to The NextJs</h1>
      {session && (
        <form
        className="px-8 pt-32"
          action={async () => {
            "use server";
            await signOut({ redirectTo: ROUTE.SIGN_IN });
          }}
        >
          <Button type="submit">Logout</Button>
        </form>
      )}
    </>
  );
};

export default Home;
