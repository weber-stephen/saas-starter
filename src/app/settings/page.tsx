import BreadCrumb from "@/components/breadcrumb";
import SettingsForm from "@/components/settings-form/settings-form";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Profile", link: "/profile" }];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <SettingsForm />
      </div>
    </ScrollArea>
  );
}
