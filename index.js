import {
    glslToThreeJSShaderSource,
    glslToThreeJSMaterial,
    glslToThreeJSMesh,
    sculptToThreeJSShaderSource,
    sculptToThreeJSMaterial,
    sculptToThreeJSMesh,
    createSculpture,
    createSculptureWithGeometry
} from './targets/threeJS.js'

import {
    glslToOfflineRenderer,
    sculptToOfflineRenderer
} from './targets/offlineRenderer.js'

import {
    sculptToMinimalRenderer
} from './targets/minimalRenderer.js'
import {
    sculptToMinimalGlitchRenderer
} from './targets/glitchMinimalRenderer.js'

import {
    sculptToRawSDF4Meshing
} from './targets/rawSDF4Meshing.js'

import {
    glslToTouchDesignerShaderSource, 
    sculptToTouchDesignerShaderSource
} from './targets/touchDesigner.js'

import {
    defaultFragSourceGLSL
} from './glsl/glsl-lib.js'

console.log('using shader-park version: 0.0.14');

/// Generate code for various targets

export {
    defaultFragSourceGLSL,
    glslToThreeJSShaderSource,
    glslToThreeJSMaterial,
    glslToThreeJSMesh,
    sculptToThreeJSShaderSource,
    sculptToThreeJSMaterial,
    sculptToThreeJSMesh,
    createSculptureWithGeometry,
    createSculpture,
    glslToOfflineRenderer,
    sculptToOfflineRenderer,
    glslToTouchDesignerShaderSource,
    sculptToTouchDesignerShaderSource,
    sculptToMinimalRenderer,
    sculptToMinimalGlitchRenderer,
    sculptToRawSDF4Meshing
}
