import { Link } from "react-router-dom";
import { MbsLogo } from "../components/MbsLogo";

export function SignUp() {
  return (
    <div className="flex min-h-svh w-full bg-background">
      <div className="relative hidden flex-[3] flex-col items-start justify-between overflow-hidden bg-accent p-8 lg:flex">
        <MbsLogo className="h-6 w-auto text-foreground" />
        <div className="flex max-w-[513px] flex-col gap-4.5 text-white">
          <p className="text-5xl leading-[48px] font-semibold tracking-[-1.5px]">
            Get Started WIth
            <br />
            MBS
          </p>
          <p className="text-base leading-6 font-normal">
            Anim voluptate mollit in fugiat esse. Nisi ad in culpa nisi
            incididunt enim dolore nostrud minim labore ex magna. Id
            consequat occaecat ut duis labore veniam mollit cupidatat anim.
          </p>
        </div>
      </div>

      <div className="flex flex-[2] flex-col items-center justify-center gap-6 p-8">
        <div className="flex w-full max-w-[350px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <h1 className="text-2xl leading-[28.8px] font-semibold tracking-[-1px] text-foreground">
              Create an account
            </h1>
            <p className="text-sm leading-5 text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-6">
            <input
              type="email"
              placeholder="name@example.com"
              className="flex min-h-9 w-full items-center rounded-none border border-border bg-input px-3 py-[7.5px] text-sm text-foreground shadow-xs outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-border-strong"
            />

            <button
              type="button"
              className="flex min-h-9 w-full items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Continue
            </button>

            <div className="flex w-full items-center justify-center gap-6">
              <div className="h-px flex-1 bg-border" />
              <p className="shrink-0 text-sm font-medium text-muted-foreground">
                Or continue with
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>

            <button
              type="button"
              className="flex min-h-9 w-full items-center justify-center gap-2 border border-border bg-white/5 px-4 py-2 text-sm font-semibold text-foreground shadow-sm hover:bg-white/10"
            >
              Google
            </button>
          </div>

          <p className="w-full text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-foreground">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
