import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProejctSelected({onStartAddProejct}) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="object-contain w-16 h-16 mx-auto"
      />
      <h2 className="my-4 mt-4 text-xl font-bold text-sonte-500">
        No Proejct Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProejct}>Create new project</Button>
      </p>
    </div>
  );
}
