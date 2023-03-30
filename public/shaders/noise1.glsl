precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float rand(float x) {
  return fract(sin(x) * 43758.5453123);
}
float noise(float x) {
  float i = floor(x);
  float f = fract(x);

  return mix(rand(i), rand(i + 1.0), smoothstep(0., 1., f));
}

float draw_circle(vec2 pos, float radius) {
  vec2 vUv = gl_FragCoord.xy/u_resolution;

  return 1.0 - step(radius, distance(vUv, vec2(pos.x + radius, (1.0 - pos.y) - radius)));
}

void main() {
  vec3 color = vec3(0.0);
  
  float y = noise(u_time);
  color += draw_circle(vec2(0.0, 0.0) + y, 0.1);

  gl_FragColor = vec4(color, 1.0);
}