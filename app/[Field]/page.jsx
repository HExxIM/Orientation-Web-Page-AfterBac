import Button from "../Components/Button";

export default function OpenLimitedPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Button
          title="كليات ذات الإستقطاب المفتوح"
          link={`/${params.Field}//Open`}
        />
        <Button
          title="كليات ذات الاستقطاب المحدود"
          link={`/${params.Field}/Limited`}
        />
      </div>
    </main>
  );
}
