#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform sampler2D u_image;
uniform vec4 u_inset;

void main() {
  vec4 texture = texture2D(u_image, vUv);
  float mask = step(1.0 - vUv.y, u_inset.x);
  mask = 1.0 - mask;
  gl_FragColor = vec4(mask) * texture;
}
