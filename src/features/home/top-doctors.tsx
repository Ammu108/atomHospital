import Image from "next/image";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const TopDoctors = () => {
  return (
    <section className="px-4">
      {/* ── Heading ── */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 font-bold text-3xl text-foreground sm:text-4xl">
          Top Doctors To Book
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
          Simply browse through our extensive list of trusted doctors, With just
          a few clicks, you can easily schedule your appointment on our
          hassle-free system
        </p>
      </div>
      {/* Doctor Cards */}
      <div>
        <Card className="relative mx-auto w-full max-w-xs pt-0">
          <div className="relative aspect-video">
            <Image alt="Doctor" className="object-cover" fill src="/doc1.png" />
          </div>
          <CardHeader>
            <CardAction></CardAction>
            <CardTitle>Sophia Williams</CardTitle>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.A practical talk on component APIs, accessibility, and
              shipping faster.
            </CardDescription>
            <Button className="mt-4" variant="primary">
              Book Now
            </Button>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default TopDoctors;
