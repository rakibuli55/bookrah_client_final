import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import NotificationSettings from "@/components/business/dashboard/settingsPage/NotificationSettings";
import PasswordSettings from "@/components/business/dashboard/settingsPage/PasswordSettings";
import PersonalInfo from "@/components/business/dashboard/settingsPage/PersonalInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsPage = () => {
  return (
    <div>
      <DashCommonWrapper>
        <div className="c-md:p-5 c-xsm:p-3 bg-white rounded-[16px] business-settings-tab font-satoshi">
          <Tabs defaultValue="my-details">
            <TabsList
              className={
                "p-0 bg-transparent w-full justify-start border-b rounded-none border-input"
              }
            >
              <div className="flex c-md:gap-12 c-xsm:gap-4">
                <TabsTrigger value="my-details">my details</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </div>
            </TabsList>
            <div className="c-md:mt-8 c-xsm:mt-4">
              <TabsContent value="my-details">
                <PersonalInfo />
              </TabsContent>
              <TabsContent value="password">
                <PasswordSettings />
              </TabsContent>
              <TabsContent value="notifications">
                <NotificationSettings />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </DashCommonWrapper>
    </div>
  );
};

export default SettingsPage;
