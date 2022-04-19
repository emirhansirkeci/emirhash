import Typical from "react-typical";

export default function TypeAnimation() {
  return (
    <Typical
      steps={[
        "Backend Developer",
        1000,
        "NFT Smart contracts",
        1000,
        "React.JS | Next.JS",
        1000,
      ]}
      loop={Infinity}
      wrapper="label"
      className="typical"
    />
  );
}
