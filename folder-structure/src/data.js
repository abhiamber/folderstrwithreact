const explorer = {
  name: "root",
  isFolder: true,
  id: 1,
  items: [
    {
      name: "public",
      id: 2,
      isFolder: true,
      items: [
        {
          name: "index.html",
          id: 3,
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      name: "src",
      id: 4,
      isFolder: true,
      items: [
        { name: "app.js", id: 5, isFolder: false, items: [] },
        { name: "index.js", id: 6, isFolder: false, items: [] },
        { name: "style.css", id: 7, isFolder: false, items: [] },
      ],
    },
    { name: "package.json", id: 8, isFolder: false, items: [] },
  ],
};

export default explorer;
