precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

#define PI 3.14159265359

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);

  return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
  vec2 uv = gl_FragCoord.xy/u_resolution * 2.0 - 1.0;
  uv.x *= u_resolution.x/u_resolution.y;

  vec2 uv0 = uv;
  vec3 finalColor = vec3(0.0);

  for (float i = 0.0; i < 4.0; i++) {
    uv *= 2.0;
    uv = fract(uv * 1.5) - 0.5;

    float d = length(uv) * exp(-length(uv0));

    vec3 color = palette(length(uv0) + i * .4 +  u_time * .4);

    d = sin(d * 8.0 + u_time ) / 8.0;
    d = abs(d);

    d = pow(0.01 / d, 1.2);

    finalColor += color * d;
  }


  gl_FragColor = vec4(finalColor, 1.0);
}