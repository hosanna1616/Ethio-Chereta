import { ButtonLink } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { SelectField } from "@/components/ui/select-field";
import { SubpageHeaderWithBack } from "@/components/subpage-header-with-back";

export default function JoinTenderPage() {
  return (
    <>
      <SubpageHeaderWithBack title="Join All Tender" backHref="/dashboard" />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-5 px-4 py-6 sm:px-6">
        <InputField label="Tender Name" placeholder="e.g. National highway expansion" />
        <SelectField label="Category" defaultValue="">
          <option value="" disabled>
            Select category
          </option>
          <option value="construction">Construction</option>
          <option value="services">Services</option>
          <option value="supply">Supply</option>
          <option value="it">IT</option>
        </SelectField>
        <InputField label="Submission Deadline" type="date" />
        <InputField label="Contact Information" placeholder="Phone or email" />

        <ButtonLink href="/dashboard" className="mt-4 !py-4">
          Save & Continue
        </ButtonLink>
      </main>
    </>
  );
}
