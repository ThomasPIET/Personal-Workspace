// Sources:

"use client";

import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import Pomodoro from "../components/Pomodoro.js";
import Outils2 from "../components/outils2.js";
import Outils3 from "../components/outils3.js";

export default function Workspace() {
  const [openModal, setOpenModal] = useState(false);
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showOutil2, setShowOutil2] = useState(false);
  const [showOutil3, setShowOutil3] = useState(false);

  const [pomodoroPosition, setPomodoroPosition] = useState({
    top: "35%",
    left: "30%",
    transform: "translate(-50%, -50%)",
  });
  const [outil2Position, setOutil2Position] = useState({
    top: "60%",
    left: "65%",
    transform: "translate(-50%, -50%)",
  });
  const [outil3Position, setOutil3Position] = useState({
    top: "70%",
    left: "30%",
    transform: "translate(-55%, -55%)",
  });

  const handleToolClick = (toolId) => {
    switch (toolId) {
      case "outil 1":
        setShowPomodoro(true);
        break;
      case "outil 2":
        setShowOutil2(true);
        break;
      case "outil 3":
        setShowOutil3(true)
        break;
      case "outil 4":
        console.log("hello4");
        break;
      case "outil 5":
        console.log("hello5");
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="flex items-center h-screen bg-white dark:bg-gray-900 ">
      <Button
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 fixed bottom-10 right-10"
        onClick={() => setOpenModal(true)}
      >
        Ajouter un outil
      </Button>
      <Modal
        dismissible
        show={openModal}
        onClose={handleCloseModal}
        style={{
          position: "fixed",
          width: "auto",
          height: "auto",
          maxWidth: "600vh",
          maxHeight: "100vh",
          bottom: "95px",
          right: "190px",
        }}
      >
        <Modal.Body>
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 ">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Boîte à outils
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleCloseModal}
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 bottom">
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Ajouter un outil à votre espace de travail
            </p>
            <ul className="my-4 space-y-3">
              {[1, 2, 3, 4, 5].map((tool) => (
                <li key={`outil-${tool}`}>
                  <a
                    onClick={() => handleToolClick(`outil ${tool}`)}
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">{`outil ${tool}`}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
      <div className="flex items-center justify-center h-screen w-screen position-relative">
        {showPomodoro && (
          <div
            style={{
              position: "absolute",
              top: pomodoroPosition.top,
              left: pomodoroPosition.left,
              transform: pomodoroPosition.transform,
            }}
          >
            <Pomodoro></Pomodoro>
          </div>
        )}
        {showOutil2 && (
          <div
            style={{
              position: "absolute",
              top: outil2Position.top,
              left: outil2Position.left,
              transform: outil2Position.transform,
            }}
          >
            <Outils2></Outils2>
          </div>
        )}
        {showOutil3 && (
          <div
            style={{
              position: "absolute",
              top: outil3Position.top,
              left: outil3Position.left,
              transform: outil3Position.transform,
            }}
          >
            <Outils3></Outils3>
          </div>
        )}
      </div>
    </section>
  );
}
