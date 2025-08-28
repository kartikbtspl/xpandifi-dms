import { Suspense } from "react";
import OtpVerification from "./otpVarification";

export default function OtpPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <OtpVerification />
    </Suspense>
  );
}
