import Header from "@/components/Header";
import ProjectCardRight from "@/components/projects/ProjectCardRight";
import ProjectCardLeft from "@/components/projects/ProjectCardLeft";
import { PROJECTS } from "@/data/Projects";

const Page = () => {
  return (
    <>
      <Header text={"PROJECTS"} />
      <div>
        {PROJECTS.map((project, index) =>
          index % 2 === 0 ? (
            <ProjectCardRight
              key={index}
              projectName={project.name}
              description={project.description}
              leftImage={project.leftImage}
              rightImage={project.rightImage}
            />
          ) : (
            <ProjectCardLeft
              key={index}
              projectName={project.name}
              description={project.description}
              leftImage={project.leftImage}
              rightImage={project.rightImage}
            />
          )
        )}
      </div>
    </>
  );
};

export default Page;
