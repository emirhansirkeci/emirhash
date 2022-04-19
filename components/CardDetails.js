import { Text, Spacer, Link } from "@nextui-org/react";

export default function CardDetails({ details }) {
  return (
    <>
      {details.name && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Name: <b>{details.name}</b>
        </Text>
      )}

      {details.type && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Type: <b>{details.type}</b>
        </Text>
      )}

      {details.name && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Standard: <b>{details.standard}</b>
        </Text>
      )}

      {details.name && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Utils: <b>{details.utils}</b>
        </Text>
      )}

      {details.name && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Network: <b>{details.network}</b>
        </Text>
      )}

      {details.backend && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Standard: <b>{details.backend}</b>
        </Text>
      )}

      {details.github && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Github:{" "}
          <Link href={details.github} target="_blank">
            Click
          </Link>
        </Text>
      )}

      {details.contract && (
        <Text p id="modal-title" size={15} css={{ letterSpacing: "$widest" }}>
          Contract:{" "}
          <Link href={details.contract} target="_blank">
            Click
          </Link>
        </Text>
      )}

      <Spacer y={"$1"}></Spacer>

      <Text h3 id="modal-title" css={{ letterSpacing: "$widest" }}>
        Notes
      </Text>

      <Text p id="modal-title" size={15}>
        <span
          dangerouslySetInnerHTML={{
            __html: details.notes.text,
          }}
        ></span>
      </Text>
    </>
  );
}
