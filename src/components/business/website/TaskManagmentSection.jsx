import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import DashboardImg from "../../../assets/images/dashboard-illustration.png";
import TrustedByCustomer from "./taskManagmentSection/TrustedByCustomer";

const TaskManagmentSection = () => {
  return (
    <section className="c-sm:pt-4 c-lg:pb-[104px] c-md:pb-20 c-xsm:pb-[60px]">
      <Container>
        {/* title  */}
        <SectionTitle
          subTitle={"boost team productivity"}
          title={"Master your projects with effortless task management"}
          desc={
            "Stay organized, prioritize with ease, and get things done faster. Our all-in-one task management tool keeps your team aligned and on track."
          }
          btnText={"register your business"}
          btnPath={"/"}
          className={"text-center c-xxl:w-[856px] c-lg:w-[780px] c-md:w-[600px] c-sm:w-full mx-auto"}
          isCenterDesc={true}
        />
        <TrustedByCustomer />
        {/* dashboard overview  */}
        <div className="c-xxl:p-5 c-lg:p-3 c-md:p-3 c-xsm:p-1 pb-0 bg-white c-xxl:h-[500px] c-xl:h-[400px] c-sm:h-[200px] c-xsm:h-[180px] c-md:rounded-tl-[30px] c-md:rounded-tr-[30px] c-xsm:rounded-tl-[12px] c-xsm:rounded-tr-[12px] overflow-hidden c-sm:mt-[56px] c-xsm:mt-8 shadow-[0_-6px_20px_-1px_rgba(0,0,0,0.1)] ">
          <img className="w-full h-full c-md:rounded-tl-[30px] c-md:rounded-tr-[30px] c-xsm:rounded-tl-[12px] c-xsm:rounded-tr-[12px]" src={DashboardImg} alt="DashboardImg" />
        </div>
      </Container>
    </section>
  );
};

export default TaskManagmentSection;
