import { Button } from "@/components/ui/button";
import ModeToggle  from "@/components/ui/modetoggle";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      
      <SignedOut >
            <SignInButton mode="modal" >
            <Button>Sigin</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ModeToggle/>
          <Button variant={"secondary"}>click me</Button>
          
    </div>
      
  );
}
