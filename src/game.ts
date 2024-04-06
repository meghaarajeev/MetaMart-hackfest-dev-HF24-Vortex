import { addBuilding } from "./modules/building"
import { setSceneOrientation } from "./modules/pivot"
import { addSocialLink } from "./modules/socialLink"
import { addVideoScreen } from "./modules/videoScreen"
import { createDispenser } from "./booth/dispenser"
import { addLogo } from "./modules/logo"
import { addWearable } from "./modules/wearable"

setSceneOrientation()
addBuilding()
addLogo()
addSocialLink()
addVideoScreen()
addWearable()

// change the eventUUID to your event
// check following links about how to setup POAP event
// https://docs.decentraland.org/development-guide/poap-tokens/
// https://github.com/decentraland-scenes/POAP-Booth
createDispenser(
    {
        position: new Vector3(20 + 20, 0, 10),
        rotation: Quaternion.Euler(0, -90, 0)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)
const screenBody = new Entity()
screenBody.addComponent(new GLTFShape('models/screen.glb'))
screenBody.addComponent(new Transform({ position: new Vector3(50, 0.05, 50) }))

engine.addEntity(screenBody)

const screenTransform = new Entity()
screenTransform.addComponent(
  new Transform({ position: new Vector3(0, 6.15, 5) })
)
screenTransform.getComponent(Transform).rotate(Vector3.Right(), -15)
screenTransform.setParent(screenBody)

const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(new Transform({ scale: new Vector3(19.2, 10.8, 1) }))
screen.getComponent(Transform).rotate(Vector3.Up(), -180)
screen.setParent(screenTransform)

screenTransform.getComponent(Transform).scale.setAll(0.625) // You can change the scale of the screen here...

// Video stream link from Vimeo
const videoClip = new VideoClip(
  'images\Video-286_resized.mp4'
)
const videoTexture = new VideoTexture(videoClip)
videoTexture.play()
videoTexture.loop = true

// Adjust screen material to increase the brightness and clarity
const screenMaterial = new Material()
screenMaterial.albedoTexture = videoTexture
screenMaterial.emissiveTexture = videoTexture
screenMaterial.emissiveColor = Color3.White()
screenMaterial.emissiveIntensity = 0.6
screenMaterial.roughness = 1.0
screen.addComponent(screenMaterial)
