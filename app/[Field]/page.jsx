import Button from "../Components/Button";
import Fields from "../Database/Fields";

export default function OpenLimitedPage({ params }) {
  const FieldIndex = Fields.findIndex((field) => field.slug === params.Field);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {Fields[FieldIndex].Schools.map((School, index) => (
          <Button key={index} title={School.Name} link={`/`} />
        ))}
      </div>
    </main>
  );
}
