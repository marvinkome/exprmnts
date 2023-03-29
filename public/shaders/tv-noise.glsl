precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float draw_rect(vec2 pos, float width, float height, in vec2 st) {
  float left = step(pos.x, st.x);
  float bottom = step(1.0 - (pos.y + height), st.y);

  float right = step(st.x, pos.x + width);
  float top = step(st.y, 1.0 - pos.y);

  return left * bottom * right * top;
}

float noise() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  return fract(sin(dot(st.xy, (u_time * 0.01) * vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);

  vec2 rect_pos = vec2(0.1, 0.1);
  float rect = draw_rect(rect_pos, 0.8, 0.8, st);

  vec3 inside_color = vec3(0.0, 0.0, 0.0) + noise();
  vec3 outside_color = vec3(0.0, 0.0, 0.0) ;

  color += vec3(rect ) * inside_color;
  color += vec3(1.0 - rect) * outside_color;

  gl_FragColor = vec4(color, 1.0);
}