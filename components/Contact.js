import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import {
  Modal,
  Input,
  Textarea,
  Button,
  Loading,
  Text,
} from "@nextui-org/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  /* === MODAL === */
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    setStatus();
  };

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  /* ============ */

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState();

  const nameRef = useRef();
  const mailRef = useRef();
  const msgRef = useRef();

  const sendHander = async () => {
    const name = nameRef.current.value;
    const from = mailRef.current.value;
    const msg = msgRef.current.value;
    const subject = "New Message From Emirhash Website";

    const isValid = validateEmail(from);
    if (!isValid) return setStatus({ msg: "Invalid mail", color: "error" });
    if (!name) return setStatus({ msg: "Invalid name", color: "error" });
    if (!msg) return setStatus({ msg: "Invalid message", color: "error" });
    setStatus("");

    let values = {
      name,
      from,
      msg,
      subject,
    };

    let config = {
      method: "post",
      url: `https://emirhash.vercel.app/api/mailsender`,
      header: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    setIsLoading(true);
    const response = await axios(config);

    if (response.status == 200)
      setStatus({ msg: "I got your message 🥳", color: "success" });
    else setStatus({ msg: "Error please try again 😔", color: "error" });

    setIsLoading(false);
  };

  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
    >
      <Button
        color="empty"
        auto
        shadow
        icon={<Icon icon="logos:google-gmail" />}
        onClick={handler}
      >
        Contact Me
      </Button>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} css={{ letterSpacing: "$widest" }}>
            Contact
            <Text b size={18} css={{ letterSpacing: "$widest" }}>
              {" "}
              Me
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            ref={nameRef}
            aria-label="Name"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            // contentLeft={}
          />
          <Input
            ref={mailRef}
            aria-label="Email"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={}
          />

          <Textarea
            ref={msgRef}
            aria-label="Your Message"
            bordered
            color="primary"
            placeholder="Your message"
          ></Textarea>
        </Modal.Body>
        <Modal.Footer>
          {status ? (
            <Text b color={status.color} css={{ paddingRight: "$5" }}>
              {status.msg}
            </Text>
          ) : (
            ""
          )}
          <Button auto color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={sendHander} size="md">
            {isLoading ? <Loading color="white"></Loading> : "Send"}
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </section>
  );
}
