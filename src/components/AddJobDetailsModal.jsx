import { Modal } from "@mantine/core";
import React from "react";

const AddJobDetailsModal = ({ opened, close }) => {
  return (
    <Modal opened={opened} title="Add Job Details" onClose={close}>
      {/* Modal content */}
    </Modal>
  );
};

export default AddJobDetailsModal;
