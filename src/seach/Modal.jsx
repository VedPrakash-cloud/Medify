import Modal from "react-modal";
import { useState } from "react";
import { Snackbar } from "@mui/material";

export default function ConfirmAppointment({
  isOpen,
  onClose,
  slot,
  hospital,
}) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSnackBar = () => {
    setOpen(false);
  };

  if (!slot) return null;

  const handleClick = (e) => {
    e.preventDefault();
    if (!email) {
      <Snackbar
        open={open}
        onClose={handleSnackBar}
        message="Please enter a valid email address"
      />;
      return;
    }

    const booking = {
      hospital: hospital,
      date: slot?.date,
      time: slot?.time,
      email,
    };

    const existing = JSON.parse(localStorage.getItem("BookingDetails")) || [];
    localStorage.setItem(
      "BookingDetails",
      JSON.stringify([...existing, booking])
    );

    setOpen(true);
    setEmail("");
    onClose();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={onClose}
        className="bg-white rounded-xl shadow-lg m-auto p-6 pb-10 outline-none shadow-lg border border-gray-100"
        overlayClassName="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-start"
      >
        <h1 className="font-poppins text-3xl my-2 font-semibold text-[#1B3C74]">
          Confirm booking
        </h1>
        <p className="font-poppins text-xs">
          Please enter your email to confirm booking for {slot.time} on{" "}
          {slot.date}.
        </p>
        <form
          type="submit"
          onSubmit={handleClick}
          className="flex flex-col"
        >
          <input
            type="email"
            placeholder="Enter your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full md:w-[500px] border border-blue-100 font-poppins rounded-lg p-2 my-3 outline-none shadow-md bg-blue-50"
          />
          <div className="flex gap-5">
            <button
              type="submit"
              className="bg-sky-500 text-white font-poppins font-semibold py-2 px-3 rounded-lg shadow-md"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={onClose}
              className="font-poppins shadow-lg py-2 px-3 rounded-lg border font-semibold text-sky-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleSnackBar}
        message="Booking Confirmed"
      />
    </div>
  );
}
