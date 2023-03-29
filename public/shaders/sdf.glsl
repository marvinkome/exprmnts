precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float animate_value(float min_value, float max_value, float speed) {
  float height = (max_value - min_value) * 0.5;
  return (sin(u_time * speed) * height) + (min_value + height);
}


float sdf_circle(in vec2 point, in vec2 center, float radius) {
  vec2 new_center = point - center;
  return length(new_center) - radius;
}

float sdf_rep(float x, float r) {
  x /= r;
  x -= floor(x) + 0.5;
  x *= r;

  return x;
}

float sdf(in vec2 st) {
  float lin = abs(st.y) - 0.2;
  float lin2 = abs(st.x) - 0.2;

  float v1 = animate_value(0.027, 0.017, 12.0);
  float v2 = animate_value(0.1, 0.2, 3.0);
  float v3 = animate_value(0.2, -0.5, 1.0);
  float v4 = animate_value(-0.2, 0.5, 1.0);

  float bal = abs(sdf_rep(sdf_circle(st, vec2(v4, 0.0), 0.1), v2)) - v1;
  float bbl = abs(sdf_rep(sdf_circle(st, vec2(v3, 0.0), 0.1), v2)) - v1;

  return max(bal,bbl);
}

void main() {
  vec3 color = vec3(0.0);
  vec2 st = gl_FragCoord.xy/u_resolution;

  st = st - 0.5;
  float d = sdf(st);

  vec3 inside_color = vec3(0.0, 0.4, 0.8);
  vec3 outside_color = vec3(1.0, animate_value(0.52, 0.73, .5), 0.0);
  
  color += vec3(1.0 - step(-0.005, d)) * inside_color;
  color += vec3(step(0.005, d)) * outside_color;

  gl_FragColor = vec4(color, 1.0);
}