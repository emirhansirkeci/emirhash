import { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import {
  Spacer,
  Modal,
  Input,
  Textarea,
  Button,
  useInput,
  Text,
} from "@nextui-org/react";
export default function Contact() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
    >
      <Button
        color=""
        auto
        shadow
        icon={<Icon icon="logos:google-gmail" />}
        onClick={handler}
      >
        Contact Me
      </Button>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Node
            <Text b size={18}>
              Mailer
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            // contentLeft={}
          />
          <Spacer y={"1px"} />
          <Input
            {...bindings}
            helperColor={helper.color}
            helperText={helper.text}
            status={helper.color}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={}
          />
          <Spacer y={"1px"} />

          <Textarea
            bordered
            color="primary"
            placeholder="Your message"
          ></Textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
