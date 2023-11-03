import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Rice Leaf Disease Classification using CNNs</h3>
        <p>

Description:

Implemented a Convolutional Neural Network (CNN) for the classification of rice leaf diseases.
The model architecture involved key layers: 2D Convolution, Maxpooling, and a Softmax output layer for generating class predictions.
Trained the model over 70 epochs, incorporating early stopping callbacks based on desired accuracy thresholds.
Achievements:

The system demonstrated exceptional performance, achieving an impressive accuracy rate of 95%.
The project utilized a standard rice leaf disease dataset to validate its effectiveness.
Key Technologies Used:

Python, TensorFlow, Keras, CNN, Early Stopping Callbacks.
Outcome:

The successful implementation of this CNN-based classification system showcases its potential for accurate and efficient identification of rice leaf diseases. This project contributes to the development of precision agriculture technologies, aiding in early detection and management of plant diseases.</p>
      </div>
      <div className="project">
        <h3> Facial Emotion Recognition with Data Cleaning</h3>
        <p>Description:

Employed Python libraries such as Numpy, Keras, and OpenCV to conduct comprehensive data cleaning on textual data.
Focused on enhancing the quality and relevance of the dataset for subsequent analysis.
Achievements:

Demonstrated outstanding results with an impressive accuracy rate of 90% on a widely-used standard facial emotion dataset.
The system excels in recognizing seven fundamental facial expressions: anger, fear, happiness, sadness, and surprise.
Key Technologies Used:

Python, Numpy, Keras, OpenCV, Data Cleaning.
Outcome:

The successful implementation of this data cleaning process has significantly elevated the accuracy and effectiveness of the facial emotion recognition system. It lays the groundwork for more robust and accurate emotion detection in real-world applications, ranging from human-computer interaction to sentiment analysis in multimedia content</p>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}

export default Projects;
