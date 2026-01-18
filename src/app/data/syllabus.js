// Course syllabus data with complete index
export const courseSyllabus = {
  courseCode: "PSCS501",
  courseTitle: "Applied Signal and Image Processing",
  credits: 4,
  modules: [
    {
      id: "module-1",
      code: "Module I",
      title: "Fundamentals & Image Processing Basics",
      units: [
        {
          id: "unit-1",
          number: "Unit 1",
          title: "Fundamentals of Digital Signals Processing",
          sections: [
            {
              number: "1",
              title: "Periodic Signals & Spectral Decomposition",
              topics: [
                "1.1 Periodic signals",
                "1.2 Spectral decomposition",
                "1.3 Signals (general concept)",
                "1.4 Reading and writing waves",
                "1.5 Spectrums (frequency spectra)",
                "1.6 Wave objects",
                "1.7 Signal objects"
              ]
            },
            {
              number: "2",
              title: "Noise",
              topics: [
                "2.1 Uncorrelated noise",
                "2.2 Integrated spectrum",
                "2.3 Brownian noise",
                "2.4 Pink noise",
                "2.5 Gaussian noise"
              ]
            },
            {
              number: "3",
              title: "Autocorrelation",
              topics: [
                "3.1 Correlation (basic concept)",
                "3.2 Serial correlation",
                "3.3 Autocorrelation",
                "3.4 Autocorrelation of periodic signals",
                "3.5 Correlation as a dot product"
              ]
            },
            {
              number: "4",
              title: "Frequency-Domain Operations",
              topics: [
                "4.1 Representing image as signals",
                "4.2 Sampling and Fourier transforms",
                "4.3 Discrete Fourier Transform (DFT)",
                "4.4 Convolution and frequency-domain filtering",
                "4.5 Smoothing using low-pass filters",
                "4.6 Sharpening using high-pass filters",
                "4.7 Fast Fourier Transforms (FFT)"
              ]
            }
          ]
        },
        {
          id: "unit-2",
          number: "Unit 2",
          title: "Image Processing Fundamentals and Pixel Transformation",
          sections: [
            {
              number: "1",
              title: "Basics of Image Processing",
              topics: [
                "1.1 Definition of image processing",
                "1.2 Applications of image processing",
                "1.3 Image processing pipeline",
                "1.4 Tools and libraries for image processing",
                "1.5 Image types and file formats"
              ]
            },
            {
              number: "2",
              title: "Intensity Transformations",
              topics: [
                "2.1 Log transform",
                "2.2 Power-law (gamma) transform",
                "2.3 Contrast stretching",
                "2.4 Thresholding"
              ]
            },
            {
              number: "3",
              title: "Histogram Processing",
              topics: [
                "3.1 Histogram equalization",
                "3.2 Histogram matching (specification)"
              ]
            },
            {
              number: "4",
              title: "Smoothing and Sharpening",
              topics: [
                "4.1 Linear smoothing of images",
                "4.2 Non-linear smoothing of images",
                "4.3 Sharpening of images"
              ]
            },
            {
              number: "5",
              title: "Image Derivatives",
              topics: [
                "5.1 Derivatives and gradients",
                "5.2 Laplacian",
                "5.3 Effect of noise on gradient computation"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-2",
      code: "Module II",
      title: "Structural, Morphological & Advanced Operations",
      units: [
        {
          id: "unit-3",
          number: "Unit 3",
          title: "Structural and Morphological Operations",
          sections: [
            {
              number: "1",
              title: "Edge Detection",
              topics: [
                "1.1 Sobel edge detection",
                "1.2 Canny edge detection",
                "1.3 Prewitt edge detection",
                "1.4 Roberts edge detection",
                "1.5 LoG (Laplacian of Gaussian) filters",
                "1.6 DoG (Difference of Gaussian) filters"
              ]
            },
            {
              number: "2",
              title: "Image Pyramids",
              topics: [
                "2.1 Gaussian pyramid",
                "2.2 Laplacian pyramid"
              ]
            },
            {
              number: "3",
              title: "Morphological Image Processing (Binary & Grayscale)",
              topics: [
                "3.1 Erosion",
                "3.2 Dilation",
                "3.3 Opening",
                "3.4 Closing",
                "3.5 Hit-or-miss transformation",
                "3.6 Skeletonizing (skeletonization)",
                "3.7 Computing the convex hull",
                "3.8 Removing small objects",
                "3.9 White top-hat",
                "3.10 Black top-hat",
                "3.11 Extracting the boundary",
                "3.12 Grayscale morphological operations"
              ]
            }
          ]
        },
        {
          id: "unit-4",
          number: "Unit 4",
          title: "Advanced Image Processing Operations",
          sections: [
            {
              number: "1",
              title: "Image Features and Descriptors",
              topics: [
                "1.1 Feature detector versus descriptor",
                "1.2 Boundary processing and feature descriptor",
                "1.3 Principal components (PCA concepts in images)",
                "1.4 Harris corner detector",
                "1.5 Blob detector",
                "1.6 Histogram of Oriented Gradients (HOG)",
                "1.7 Scale-Invariant Feature Transform (SIFT)",
                "1.8 Haar-like features"
              ]
            },
            {
              number: "2",
              title: "Image Segmentation",
              topics: [
                "2.1 Hough Transform for detecting lines and circles",
                "2.2 Thresholding and Otsu's segmentation",
                "2.3 Edge-based segmentation",
                "2.4 Region-based segmentation",
                "2.5 Region growing",
                "2.6 Region splitting and merging",
                "2.7 Watershed algorithm",
                "2.8 Active contours",
                "2.9 Morphological snakes",
                "2.10 GrabCut algorithm"
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Helper function to get module by ID
export const getModuleById = (moduleId) => {
  return courseSyllabus.modules.find(module => module.id === moduleId);
};

// Helper function to get unit by module and unit ID
export const getUnitById = (moduleId, unitId) => {
  const module = getModuleById(moduleId);
  return module?.units.find(unit => unit.id === unitId);
};

// Get all sections across all modules for slider
export const getAllSections = () => {
  const sections = [];
  courseSyllabus.modules.forEach(module => {
    module.units.forEach(unit => {
      unit.sections.forEach(section => {
        sections.push({
          ...section,
          moduleCode: module.code,
          unitNumber: unit.number,
          unitTitle: unit.title
        });
      });
    });
  });
  return sections;
};

// Helper function to get all topics count
export const getTotalTopicsCount = () => {
  return courseSyllabus.modules.reduce((total, module) => {
    return total + module.units.reduce((unitTotal, unit) => {
      return unitTotal + unit.sections.reduce((sectionTotal, section) => {
        return sectionTotal + section.topics.length;
      }, 0);
    }, 0);
  }, 0);
};

// Get compact syllabus for homepage display
export const getCompactSyllabus = () => {
  return courseSyllabus.modules.map(module => ({
    ...module,
    units: module.units.map(unit => ({
      ...unit,
      sections: unit.sections.map(section => ({
        number: section.number,
        title: section.title,
        topicCount: section.topics.length
      }))
    }))
  }));
};