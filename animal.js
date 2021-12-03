AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "Lion",
          title: "Lion",
          url: "https://images.theconversation.com/files/243439/original/file-20181101-83635-1xcrr39.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
        },
        {
            id: "Monkey",
            title: "Monkey",
            url: "https://assets.telegraphindia.com/telegraph/88b7ceb7-244d-4414-91f5-76491f8774b6.jpg",
        },
        {
          id: "Tiger",
          title: "Tiger",
          url: "https://images.hindustantimes.com/img/2021/07/29/1600x900/waldemar-brandt-zQsCISvBY2E-unsplash_1627533052461_1627533078303.jpg",
        },
        {
          id: "Elephant",
          title: "Elephant",
          url: "https://media.istockphoto.com/photos/background-elephant-picture-id479667835?k=20&m=479667835&s=612x612&w=0&h=Zy5JdCC9SqOL2Tf5SHSM0VdjaKdn2xt_jZi8SOy-USY=",
        },
        {
          id: "giraffe",
          title: "giraffe",
          url: "https://static01.nyt.com/images/2021/08/07/science/07tb-giraffesociety-3/07tb-giraffesociety-3-mediumSquareAt3X.jpg",
        },
      ];
      
      let prevoiusYPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posY = prevoiusYPosition + 25;
        const posX = 0;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusYPosition = posY;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
  
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 9,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.x = -40;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  });
  