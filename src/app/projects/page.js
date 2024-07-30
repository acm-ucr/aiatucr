import ProjectCardRight from "@/components/projects/ProjectCardRight";
import ProjectCardLeft from "@/components/projects/ProjectCardLeft";

const Page = () => {
  return (
    <div>
      <ProjectCardRight
        projectName="Project Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ProjectCardLeft
        projectName="Project Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default Page;
