import React, { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";
import ngoimg from "../assets/NGO1.jpg";

function Blogs() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Card className="max-w-sm overflow-hidden shadow-lg rounded-lg hover:bg-gradient-to-r to-emerald-300 from-sky-100">
        <img
          className="w-full h-48 object-cover"
          src={ngoimg}
          alt="Blog Post"
        />
        <div className="p-4">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">
            Blog Title
          </h5>
          <p className="text-gray-600 text-sm mb-2">Posted on August 15, 2024</p>
          <p className="text-gray-700 dark:text-gray-400">
            This is a brief excerpt from the blog post. It gives readers a quick
            overview of the content...This is a brief excerpt from the blog post. It gives readers a quick
            overview of the content...
          </p>
          <Button
            className="mt-4 bg-gradient-to-r to-emerald-600 from-sky-400 text-white  rounded hover:bg-violet-600"
            onClick={openModal}
          >
            Read More
          </Button>
        </div>
      </Card>

      <Modal show={isOpen} onClose={closeModal}>
        <Modal.Header>Blog Title</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              This is the full description of the blog post. It includes more
              details, stories, and insights that provide the reader with a
              deeper understanding of the topic. Here you can expand on the
              ideas introduced in the excerpt, share personal anecdotes, or
              dive into the specifics of the subject matter...
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} color="gray">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Blogs;
