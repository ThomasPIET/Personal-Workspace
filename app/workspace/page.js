"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Workspace() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="flex items-center h-screen bg-white dark:bg-gray-900 ">
      <Button
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 fixed bottom-10 right-10"
        onClick={() => setOpenModal(true)}
      >
        Ajouter un outils
      </Button>

  
        <Modal
          dismissible
          show={openModal}
          onClose={() => setOpenModal(false)}
          style={{
            position: "fixed",
            width: "auto",
            height: "auto",
            maxWidth: "600vh",
            maxHeight: "100vh",
            bottom: "95px", // Ajustez cette valeur en fonction de la hauteur du bouton
            right: "190px", // Ajustez cette valeur en fonction de la largeur du bouton
          }}
        >
          <Modal.Body>
            {/* header du modal  */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 ">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Boîte à outils
              </h3>
              {/* icone de la croix */}
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setOpenModal(false)}
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
                Ajouter une outil à votre espace de travail
              </p>
              <ul className="my-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      outil 1
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      outil 2
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      outil 3
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      outil 4
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      outil 5
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Modal.Body>
        </Modal>
    </section>
  );
}
