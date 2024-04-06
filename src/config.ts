export default {
    //SCENE FACING: "NORTH"/"EAST"/"SOUTH"/"WEST"
    sceneOrientation: "NORTH",
    logo: {
        bottom: {
            //image should be 512px square
            imgSrc: "images/logo.jpg",
            position: new Vector3(6.96862, 5.72577, 7.34845)
        },
        top: {
            name: "METAMART",
            fontSize: 6,
            color: new Color3(0.1, 0.1, 0.1),
            position: new Vector3(0, 5.84663, 6.39477)
        }
    },
    socialMedia: [
        {
            name: "INSTAGRAM HOMEPAGE",
            model: "models/social_media/homepage.glb",
            link: "https://www.instagram.com/thatgirlmotive/",
            position: new Vector3(1.5, 1.3, -5.35)
        },
        {
            name: "DISCORD",
            model: "models/social_media/discord.glb",
            link: "https://www.discord.org",
            position: new Vector3(0.5, 1.3, -5.35)
        },
        {
            name: "WISHLINK",
            model: "models/social_media/twitter.glb",
            link: "https://wishlink.com/thatgirlmotive",
            position: new Vector3(-0.5, 1.3, -5.35)
        },
        {
            name: "TELEGRAM",
            model: "models/social_media/telegram.glb",
            link: "https://www.telegram.org",
            position: new Vector3(-1.5, 1.3, -5.35)
        }
    ],
    videoScreen: {
        src: "images/Video-286_resized.mp4",
        width: 1280,
        height: 720
    },
    wearable: [
        {
            name: "Korean Tees",
            model: "models/wearables/1.glb",
            link: "https://www.instagram.com/p/C3edbxRSDaz/?img_index=1",
            position: new Vector3(4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "Trendy Tops",
            model: "models/wearables/2.glb",
            link: "https://www.instagram.com/p/C45aUhiyDvg/",
            position: new Vector3(-4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "Aviator",
            model: "models/wearables/3.glb",
            link: "https://www.instagram.com/p/C3edbxRSDaz/?igsh=MWhxZGw3eDZ4cXlwbg==",
            position: new Vector3(5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, -90, 0)
        },
        {
            name: "Over9000", 
            model: "models/wearables/4.glb",
            link: "https://www.instagram.com/p/C3edbxRSDaz/?igsh=MWhxZGw3eDZ4cXlwbg==",
            position: new Vector3(-5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, 90, 0)
        },
        {
            name: "Launch TShirt",
            model: "models/wearables/5.glb",
            link: "https://www.instagram.com/p/C3edbxRSDaz/?igsh=MWhxZGw3eDZ4cXlwbg==",
            position: new Vector3(0, -0.1, 0.7),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "Budget Sneakers",
            model: "models/wearables/6.glb",
            link: "https://www.instagram.com/p/C4vaPS4oGbK/",
            position: new Vector3(1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, 45, 0)
        },
        {
            name: "Flat Tops",
            model: "models/wearables/7.glb",
            link: "https://www.instagram.com/p/C5DtgxhStKA/",
            position: new Vector3(-1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, -45, 0)
        },
    ]
}