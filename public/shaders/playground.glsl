precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

#define PI 3.14159265359


mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float draw_circle(vec2 pos, float radius,  in vec2 st) {
  return 1.0 - step(radius, distance(st, vec2(pos.x + radius, (1.0 - pos.y) - radius)));
}

float draw_rect(vec2 pos, float width, float height, in vec2 st) {
  float left = step(pos.x, st.x);
  float bottom = step(1.0 - (pos.y + height), st.y);

  float right = step(st.x, pos.x + width);
  float top = step(st.y, 1.0 - pos.y);

  return left * bottom * right * top;
}

// dot(st.xy, vec2(12.9898, 78.233))
float rand(float x) {
  return fract(sin(x) * 43758.5453123);
}
float noise(float x) {
  float i = floor(x);
  float f = fract(x);

  return mix(rand(i), rand(i + 1.0), smoothstep(0., 1., f));
}

float rand_2d(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise_2d(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = rand_2d(i);
  float b = rand_2d(i + vec2(1.0, 0.0));
  float c = rand_2d(i + vec2(0.0, 1.0));
  float d = rand_2d(i + vec2(1.0, 1.0));

  vec2 u = smoothstep(0., 1., f);

  return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);
  
  float timer = sin(u_time * 0.2) * 30.0;
  float y = noise_2d(vec2(st * timer));

  vec2 position = vec2(0., 0.) + y;

  float circle = draw_rect(position, 1.0, 1.0, st);
  float shape = circle;
  color += circle;

  gl_FragColor = vec4(color, 1.0);
}