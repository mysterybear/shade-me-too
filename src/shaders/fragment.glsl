#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_xy;
uniform vec3 u_color;
varying vec2 vUv;

void main() {
  vec2 center = vec2(0.5, 0.5);
  vec2 pos = mod(vUv * u_xy.y, 1.0);
  float d = distance(pos, center);
  float mask = step(u_xy.x + vUv.x / 4.0, d);
  mask = 1.0 - mask;
  vec3 fragColor = mix(u_color, vec3(1.0), mask);
  gl_FragColor = vec4(vec3(fragColor), 1.0);
}
