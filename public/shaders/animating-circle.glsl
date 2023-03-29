precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float draw_circle(vec2 pos, float radius) {
  vec2 vUv = gl_FragCoord.xy/u_resolution;

  return 1.0 - step(radius, distance(vUv, vec2(pos.x + radius, (1.0 - pos.y) - radius)));
}

void main() {
  vec3 color = vec3(0.0);
  float time = abs(sin(u_time));

  // pos: vec2(0.2) to vec2(0.1) - radius: 0.2 to 0.1;
  float pct = draw_circle((1.0 - time) * vec2(0.1) + 0.1, (time * 0.1) + 0.1);

  // pos: vec2(0.4) to vec2(0.3) - radius: 0.2 to 0.1;
  float pct2 = draw_circle((1.0 - time) * vec2(0.1) + 0.3, (time * 0.1) + 0.1);

   // pos: vec2(0.6, 0.2) to vec2(0.5, 0.1) vec2(0.6, 0.2)  - radius: 0.2 to 0.1;
  float pct3 = draw_circle((1.0 - time) * vec2(0.1) + vec2(0.5, 0.1), (time * 0.1) + 0.1);

  color = vec3(pct + pct2 + pct3 + 0.5);
  gl_FragColor = vec4(color, 1.0);
}