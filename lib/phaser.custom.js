require('@phaser/polyfills')

const CONST = require('@phaser/const')
const extend = require('@phaser/utils/object/Extend')

const Phaser = {
  Cameras: {
    // TODO: complete options
    Scene2D: require('@phaser/cameras/2d'),
  },

  Physics: {
    // TODO: complete options
    Arcade: require('@phaser/physics/arcade'),
  },

  Events: require('@phaser/events/EventEmitter'),
  Game: require('@phaser/core/Game'),
  Textures: require('@phaser/textures'),

  Renderer: {
    // TODO: complete options
    WebGL: require('@phaser/renderer/webgl'),
  },

  Loader: {
    // Events: require('@phaser/loader/events'),

    FileTypes: require('@phaser/loader/filetypes'),

    // File: require('@phaser/loader/File'),
    // FileTypesManager: require('@phaser/loader/FileTypesManager'),
    GetURL: require('@phaser/loader/GetURL'),
    LoaderPlugin: require('@phaser/loader/LoaderPlugin'),
    // MergeXHRSettings: require('@phaser/loader/MergeXHRSettings'),
    // MultiFile: require('@phaser/loader/MultiFile'),
    // XHRLoader: require('@phaser/loader/XHRLoader'),
    // XHRSettings: require('@phaser/loader/XHRSettings'),
  },

  GameObjects: {
    // TODO: complete options
    DisplayList: require('@phaser/gameobjects/DisplayList'),
    UpdateList: require('@phaser/gameobjects/UpdateList'),
    Image: require('@phaser/gameobjects/image/Image'),
    Particles: require('@phaser/gameobjects/particles/Particle'),
    Graphics: require('@phaser/gameobjects/graphics/Graphics.js'),
    Factories: {
      Graphics: require('@phaser/gameobjects/graphics/GraphicsFactory'),
      Image: require('@phaser/gameobjects/image/ImageFactory'),
      Particles: require('@phaser/gameobjects/particles/ParticleManagerFactory'),
    },
    Creators: {
      // TODO: complete options
      Graphics: require('@phaser/gameobjects/graphics/GraphicsCreator'),
      Image: require('@phaser/gameobjects/image/ImageCreator'),
      Particles: require('@phaser/gameobjects/particles/ParticleManagerCreator'),
    },
  },

  Math: {
    // TODO: complete options
    Between: require('@phaser/math/Between'),
  },

  // testing what is needing
  // Actions: require('@phaser/actions'),
  // Animations: require('@phaser/animations'),
  // BlendModes: require('@phaser/renderer/BlendModes'),
  // Cache: require('@phaser/cache'),
  // Cameras: require('@phaser/cameras'),
  // Core: require('@phaser/core'),
  // Class: require('@phaser/utils/Class'),
  // Create: require('@phaser/create'),
  // Curves: require('@phaser/curves'),
  // Data: require('@phaser/data'),
  // Display: require('@phaser/display'),
  // DOM: require('@phaser/dom'),
  // Events: require('@phaser/events'),
  // GameObjects: require('@phaser/gameobjects'),
  // Geom: require('@phaser/geom'),
  // Input: require('@phaser/input'),
  // Physics: require('@phaser/physics'),
  // Plugins: require('@phaser/plugins'),
  // Renderer: require('@phaser/renderer'),
  // Scale: require('@phaser/scale'),
  // ScaleModes: require('@phaser/renderer/ScaleModes'),
  // Scene: require('@phaser/scene/Scene'),
  // Scenes: require('@phaser/scene'),
  // Structs: require('@phaser/structs'),
  // Textures: require('@phaser/textures'),
  // Tilemaps: require('@phaser/tilemaps'),
  // Time: require('@phaser/time'),
  // Tweens: require('@phaser/tweens'),
  // Utils: require('@phaser/utils'),
}

//  Merge in the consts

module.exports = extend(false, Phaser, CONST)
