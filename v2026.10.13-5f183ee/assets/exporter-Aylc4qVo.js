const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vision_bundle-CM9eEVyl.js","./index-Drgre6S6.js","./dialog-Dka2EOBp.js","./zap-_ik4__1o.js","./text-CDtC0Gb1.js","./timeline-CaG3rhMv.js","./time-BQHrepxd.js","./audio-biYwsdwa.js","./catalog-Dbnj8Hh_.js","./scene-CGn0yMF9.js","./slice-Yyh72qIg.js","./prefs-6gHGBuvt.js","./emitter-BC9asseH.js","./template-art-KTmX4kyg.js","./rolldown-runtime-hePW80VL.js","./wav-Q-s1i1ZG.js","./index-C29wkN_J.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-hePW80VL.js";import{h as t,m as n,n as r,t as i}from"./text-CDtC0Gb1.js";import{Cn as a,Dn as o,En as s,Er as c,F as l,Fr as u,Jt as d,Kt as f,Qt as p,Sn as m,Tr as h,Un as g,Zt as _,bn as v,gn as y,hn as b,mn as x,nn as S,tn as C,wn as w,xn as ee}from"./timeline-CaG3rhMv.js";import{t as T}from"./time-BQHrepxd.js";import{o as te}from"./catalog-Dbnj8Hh_.js";import{f as ne,i as re,n as ie}from"./scene-CGn0yMF9.js";import{P as ae}from"./index-Drgre6S6.js";import{b as oe,i as se,l as ce,m as le,y as ue}from"./src-CD_4-zWm.js";import{a as de,c as fe,d as pe,h as me,i as he,m as ge,n as _e,o as ve,p as ye,r as be,s as xe,t as Se,u as Ce}from"./output-DT5jQP0h.js";import{a as we,i as Te,r as Ee}from"./audio-mix--BK7Egye.js";import{a as De,c as Oe,n as ke,o as Ae,r as je,s as Me,t as Ne}from"./segmenter-d4ywV-LD.js";var Pe=`
uniform float u_dur;       // length of the effect (or clip) in seconds, 0 if unknown
const float PI = 3.14159265;
const float TAU = 6.28318531;
vec2 hash22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0; float a = 0.5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= 0.5; } return s / 0.9375; }
vec3 hue2rgb(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
vec3 rgb2hsv(vec3 c) {
  float mx = max(c.r, max(c.g, c.b)); float mn = min(c.r, min(c.g, c.b)); float d = mx - mn; float h = 0.0;
  if (d > 1e-5) { if (mx == c.r) h = mod((c.g - c.b) / d, 6.0); else if (mx == c.g) h = (c.b - c.r) / d + 2.0; else h = (c.r - c.g) / d + 4.0; }
  return vec3(h / 6.0, mx > 0.0 ? d / mx : 0.0, mx);
}
vec3 hsv2rgb(vec3 c) { return c.z * mix(vec3(1.0), hue2rgb(c.x), c.y); }
mat2 rot(float a) { float c = cos(a); float s = sin(a); return mat2(c, -s, s, c); }
float aspect() { return u_res.x / u_res.y; }
bool inside(vec2 uv) { return uv.x >= 0.0 && uv.y >= 0.0 && uv.x <= 1.0 && uv.y <= 1.0; }
vec3 unpre(vec4 c) { return c.a > 1e-4 ? c.rgb / c.a : vec3(0.0); }
vec4 repre(vec3 rgb, float a) { return vec4(clamp(rgb, 0.0, 1.0) * a, a); }
vec4 over(vec4 c, vec3 col, float m) { m = clamp(m, 0.0, 1.0); return c * (1.0 - m) + vec4(col * m, m); }
float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float bayer4(vec2 cell) {
  ivec2 i = ivec2(mod(cell, 4.0)); int a = i.x ^ i.y; int b = i.y;
  int v = ((a & 1) << 3) | ((b & 1) << 2) | (((a >> 1) & 1) << 1) | ((b >> 1) & 1);
  return (float(v) + 0.5) / 16.0;
}
// Disc blur: 24 taps on a golden-angle spiral, rotated per pixel to hide the pattern. r is the radius in uv.
vec4 discBlur(vec2 uv, vec2 r) {
  vec4 acc = vec4(0.0); float j = hash12(uv * u_res) * TAU;
  for (int i = 0; i < 24; i++) { float a = float(i) * 2.39996323 + j; float d = sqrt((float(i) + 0.5) / 24.0); acc += src(uv + vec2(cos(a), sin(a)) * d * r); }
  return acc / 24.0;
}
`,Fe={"soft-focus":`uniform float u_radius;
void main() {
  vec4 c = src(v_uv);
  vec4 b = discBlur(v_uv, vec2(1.0 / aspect(), 1.0) * (0.004 + u_radius * 0.03));
  vec3 soft = mix(b.rgb, max(b.rgb, c.rgb), 0.6);
  outColor = vec4(mix(c.rgb, soft, u_strength * 0.85), c.a);
}`,"tilt-shift":`uniform float u_focus, u_size;
void main() {
  float d = abs(v_uv.y - u_focus);
  float m = smoothstep(u_size * 0.3, u_size * 0.3 + 0.28, d);
  vec4 b = discBlur(v_uv, vec2(1.0 / aspect(), 1.0) * m * u_strength * 0.022);
  vec3 rgb = unpre(b);
  rgb = mix(vec3(luma(rgb)), rgb, 1.0 + 0.35 * u_strength);
  rgb = (rgb - 0.5) * (1.0 + 0.1 * u_strength) + 0.5;
  outColor = repre(rgb, b.a);
}`,duotone:`uniform vec3 u_dark, u_light;
void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c);
  float l = smoothstep(0.04, 0.96, luma(rgb));
  vec3 d = mix(u_dark, u_light, l);
  outColor = repre(mix(rgb, d, u_strength), c.a);
}`,"color-pop":`uniform float u_hue, u_range;
void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c); vec3 hsv = rgb2hsv(rgb);
  float dh = abs(fract(hsv.x - u_hue / 360.0 + 0.5) - 0.5) * 360.0;
  float tol = 5.0 + u_range * 55.0;
  float keep = (1.0 - smoothstep(tol, tol + 18.0, dh)) * smoothstep(0.08, 0.25, hsv.y);
  outColor = repre(mix(rgb, vec3(luma(rgb)), (1.0 - keep) * u_strength), c.a);
}`,"slow-push":`uniform float u_angle;
void main() {
  float p = u_dur > 0.0 ? clamp(u_time / u_dur, 0.0, 1.0) : 0.5;
  float z = 1.0 + u_strength * 0.35 * p;
  vec2 dir = vec2(cos(radians(u_angle)), sin(radians(u_angle)));
  outColor = src((v_uv - 0.5) / z + 0.5 + dir * (1.0 - 1.0 / z) * 0.45);
}`,"beat-bounce":`void main() {
  float bpm = 60.0 + u_speed * 120.0;
  float k = exp(-fract(u_time * bpm / 60.0) * 7.0) * u_strength;
  vec4 c = src((v_uv - 0.5) / vec2(1.0 + k * 0.1, 1.0 + k * 0.16) + 0.5);
  c.rgb *= 1.0 + k * 0.12;
  outColor = c;
}`,handheld:`void main() {
  float t = u_time * (0.2 + u_speed * 1.6);
  vec2 o = vec2(vnoise(vec2(t, 1.7)), vnoise(vec2(t + 9.2, 4.1))) - 0.5;
  o += (vec2(vnoise(vec2(t * 3.1, 2.3)), vnoise(vec2(t * 2.9, 8.8))) - 0.5) * 0.35;
  float a = (vnoise(vec2(t * 0.8, 7.3)) - 0.5) * u_strength * 0.05;
  float z = 1.0 + u_strength * 0.12;
  vec2 p = rot(a) * ((v_uv - 0.5) * vec2(aspect(), 1.0));
  p.x /= aspect();
  outColor = src(p / z + 0.5 + o * u_strength * 0.05);
}`,"whip-blur":`uniform float u_angle;
void main() {
  float t = u_time * (0.4 + u_speed * 2.5);
  float w = pow(abs(sin(t * PI)), 8.0);
  vec2 dir = vec2(cos(radians(u_angle)) / aspect(), sin(radians(u_angle)));
  float len = (0.01 + 0.2 * w) * u_strength;
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 16; i++) acc += src(v_uv + dir * ((float(i) / 15.0 - 0.5) * len + w * u_strength * 0.03));
  outColor = acc / 16.0;
}`,bloom:`uniform float u_threshold;
void main() {
  vec4 c = src(v_uv);
  float j = hash12(v_uv * u_res) * TAU;
  vec2 r = vec2(1.0 / aspect(), 1.0) * 0.05;
  vec3 b = vec3(0.0);
  for (int i = 0; i < 24; i++) {
    float a = float(i) * 2.39996323 + j; float d = sqrt((float(i) + 0.5) / 24.0);
    b += max(src(v_uv + vec2(cos(a), sin(a)) * d * r).rgb - u_threshold, 0.0) * (1.2 - d);
  }
  b /= 24.0 * 0.6 * max(1.0 - u_threshold, 0.15);
  outColor = vec4(c.rgb + b * u_strength * 1.5, c.a);
}`,"sun-rays":`uniform float u_pos;
void main() {
  vec4 c = src(v_uv);
  vec2 L = vec2(u_pos, 0.95);
  vec2 stp = (L - v_uv) / 40.0;
  vec2 uv = v_uv + stp * hash12(v_uv * u_res);
  float decay = 1.0; vec3 acc = vec3(0.0);
  for (int i = 0; i < 40; i++) { uv += stp; vec3 s = src(uv).rgb; acc += s * smoothstep(0.5, 0.95, luma(s)) * decay; decay *= 0.97; }
  acc /= 40.0;
  float flick = 0.85 + 0.15 * vnoise(vec2(u_time * rate(), 3.0));
  float halo = exp(-length((v_uv - L) * vec2(aspect(), 1.0)) * 3.5);
  outColor = vec4(c.rgb + (acc * 2.5 + halo * 0.3) * vec3(1.0, 0.9, 0.7) * u_strength * flick, c.a);
}`,"lens-flare":`void main() {
  vec4 c = src(v_uv);
  float t = u_time * rate() * 0.25;
  vec2 asp = vec2(aspect(), 1.0);
  vec2 p = (v_uv - 0.5) * asp;
  vec2 l = (vec2(0.5 + 0.32 * sin(t), 0.68 + 0.12 * cos(t * 0.8)) - 0.5) * asp;
  vec2 dl = p - l; float d = length(dl);
  vec3 f = vec3(1.0, 0.92, 0.8) * (0.012 / (d + 0.012));
  f += vec3(0.7, 0.8, 1.0) * exp(-abs(dl.y) * 90.0) * exp(-abs(dl.x) * 2.5) * 0.5;
  f += vec3(1.0, 0.85, 0.7) * pow(max(0.0, 1.0 - d * 2.2), 3.0) * 0.25;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float r = 0.025 + 0.035 * hash11(fi + 3.0);
    float gd = length(p - l * (0.6 - fi * 0.38));
    vec3 col = hue2rgb(fract(0.08 + fi * 0.17)) * 0.6 + 0.2;
    f += col * ((1.0 - smoothstep(r * 0.7, r, gd)) * 0.14 + (1.0 - smoothstep(0.0, 0.006, abs(gd - r))) * 0.1);
  }
  outColor = vec4(c.rgb + f * u_strength, c.a);
}`,bokeh:`uniform float u_size;
void main() {
  vec4 c = src(v_uv);
  vec2 asp = vec2(aspect(), 1.0);
  float t = u_time * rate();
  vec3 acc = vec3(0.0);
  for (int l = 0; l < 3; l++) {
    float fl = float(l);
    float sc = (2.5 + fl * 1.5) / (0.4 + u_size);
    vec2 p = v_uv * asp * sc + vec2(t * 0.03 * (fl + 1.0), -t * 0.05 * (fl + 1.0));
    vec2 id = floor(p); vec2 f = fract(p) - 0.5;
    float h = hash12(id + fl * 19.0);
    if (h > 0.25 + 0.55 * u_strength) continue;
    vec2 o = (hash22(id + fl * 7.0) - 0.5) * 0.45;
    float r = 0.16 + 0.16 * hash12(id * 1.7 + fl);
    float d = length(f - o);
    float disc = (1.0 - smoothstep(r - 0.025, r, d)) * (0.55 + 0.45 * smoothstep(r * 0.3, r, d));
    vec3 col = mix(vec3(1.0), hue2rgb(fract(h * 3.7 + 0.08)), 0.55);
    acc += col * disc * (0.65 + 0.35 * sin(t * 1.3 + h * 40.0)) * (0.3 - fl * 0.06);
  }
  outColor = vec4(c.rgb * (1.0 - 0.2 * u_strength) + acc * (0.4 + u_strength), c.a);
}`,crt:`uniform float u_curve;
void main() {
  vec2 p = v_uv * 2.0 - 1.0;
  p *= 1.0 + u_curve * 0.2 * (p.yx * p.yx);
  vec2 uv = p * 0.5 + 0.5;
  float edge = smoothstep(0.0, 0.006, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
  float off = 0.0012 + 0.002 * u_strength;
  vec4 m = src(uv);
  vec3 col = vec3(src(uv + vec2(off, 0.0)).r, m.g, src(uv - vec2(off, 0.0)).b);
  float lines = min(240.0, u_res.y * 0.3);
  col *= 1.0 - u_strength * 0.4 * (0.5 + 0.5 * cos(uv.y * lines * TAU));
  float tri = mod(floor(uv.x * lines * aspect() * 1.5), 3.0);
  vec3 mask = tri < 0.5 ? vec3(1.0, 0.75, 0.75) : tri < 1.5 ? vec3(0.75, 1.0, 0.75) : vec3(0.75, 0.75, 1.0);
  col *= mix(vec3(1.0), mask * 1.15, u_strength * 0.7);
  float vig = pow(clamp(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.0, 1.0), 0.3);
  col *= mix(1.0, vig, u_strength) * (1.0 + 0.25 * u_strength) * (1.0 + 0.03 * u_strength * sin(u_time * 60.0));
  outColor = mix(vec4(0.0, 0.0, 0.0, 1.0), vec4(col, m.a), edge);
}`,"home-movie":`uniform float u_grain;
void main() {
  float t = floor(u_time * 18.0);
  vec2 jit = vec2(hash11(t) - 0.5, hash11(t + 3.7) - 0.5) * vec2(0.002, 0.005) * u_strength;
  vec4 c = src((v_uv - 0.5) * (1.0 - 0.04 * u_strength) + 0.5 + jit);
  vec3 rgb = unpre(c);
  vec3 film = mix(rgb, vec3(luma(rgb)), 0.25) * vec3(1.08, 0.98, 0.8) + vec3(0.06, 0.035, 0.0);
  film = mix(film, film * film * (3.0 - 2.0 * film), 0.5);
  film *= 0.93 + 0.07 * hash11(t * 1.3);
  vec2 d = abs(v_uv - 0.5) - vec2(0.43, 0.41);
  film *= 1.0 - smoothstep(-0.05, 0.07, length(max(d, 0.0)) + min(max(d.x, d.y), 0.0));
  film += (hash12(v_uv * u_res + t * 7.0) - 0.5) * 0.18 * u_grain;
  outColor = repre(mix(rgb, film, u_strength), c.a);
}`,dust:`void main() {
  vec4 c = src(v_uv);
  float t = floor(u_time * (4.0 + u_speed * 20.0));
  vec2 asp = vec2(aspect(), 1.0);
  float dark = 0.0;
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    vec2 g = v_uv * asp * (14.0 + fi * 20.0);
    vec2 id = floor(g);
    if (hash12(id + vec2(t * 13.1, fi * 5.0)) > 1.0 - 0.02 * u_strength) {
      vec2 o = (hash22(id + t) - 0.5) * 0.5;
      float r = 0.06 + 0.16 * hash12(id - t);
      dark = max(dark, 1.0 - smoothstep(r * 0.3, r, length(fract(g) - 0.5 - o)));
    }
  }
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    if (hash11(t * 3.3 + fi * 7.7) > 0.25 + 0.6 * u_strength) continue;
    vec2 ctr = vec2(hash11(t + fi * 1.9), hash11(t * 1.7 + fi));
    vec2 p = rot(hash11(t + 9.0 + fi) * TAU) * ((v_uv - ctr) * asp);
    float curve = p.y - (hash11(t + 4.0 + fi) - 0.5) * 30.0 * p.x * p.x;
    dark = max(dark, (1.0 - smoothstep(0.0, 0.0022, abs(curve))) * (1.0 - smoothstep(0.0, 0.07, abs(p.x))));
  }
  float scratch = (1.0 - smoothstep(0.0, 0.0012, abs(v_uv.x - hash11(t * 0.37 + 1.0)))) * step(0.55, hash11(t * 2.9)) * (0.4 + 0.6 * vnoise(vec2(v_uv.y * 25.0, t)));
  vec3 rgb = mix(c.rgb, vec3(0.04) * c.a, dark * 0.85) + vec3(scratch * 0.4 * u_strength) * c.a;
  outColor = vec4(rgb, c.a);
}`,dither:`uniform float u_size; uniform vec3 u_ink, u_paper;
void main() {
  float n = mix(360.0, 70.0, u_size);
  vec2 cells = vec2(floor(n * aspect()), n);
  vec2 cell = floor(v_uv * cells);
  vec4 c = src((cell + 0.5) / cells);
  float l = clamp((luma(unpre(c)) - 0.5) * 1.15 + 0.5, 0.0, 1.0);
  outColor = vec4((l > bayer4(cell) ? u_paper : u_ink) * c.a, c.a);
}`,bit8:`uniform float u_size, u_colors;
void main() {
  float n = mix(160.0, 36.0, u_size);
  vec2 cells = vec2(floor(n * aspect()), n);
  vec2 cell = floor(v_uv * cells);
  vec4 c = src((cell + 0.5) / cells);
  vec3 rgb = unpre(c);
  rgb = clamp(mix(vec3(luma(rgb)), rgb, 1.25), 0.0, 1.0);
  float lv = floor(mix(2.0, 7.0, u_colors));
  outColor = repre(floor(rgb * lv + bayer4(cell)) / lv, c.a);
}`,"block-smear":`uniform float u_size;
void main() {
  float t = floor(u_time * (3.0 + u_speed * 15.0));
  float n = mix(36.0, 8.0, u_size);
  vec2 cells = vec2(floor(n * aspect()), n);
  vec2 id = floor(v_uv * cells);
  float on = step(1.0 - u_strength * 0.45, hash12(id + t * 1.31));
  vec2 uv = v_uv + on * (hash22(id * 0.73 + t) - 0.5) * vec2(0.14, 0.06) * u_strength;
  float row = step(1.0 - u_strength * 0.2, hash12(vec2(id.y, t * 2.1)));
  uv.x = mix(uv.x, (floor(v_uv.x * cells.x * 0.25) + 0.5) / (cells.x * 0.25), row);
  vec4 c = src(uv);
  c.rgb = mix(c.rgb, c.gbr, on * step(0.8, hash12(id + t * 3.7)));
  outColor = c;
}`,"signal-tear":`void main() {
  float t = u_time * (0.4 + u_speed * 2.5);
  float y = v_uv.y;
  float band = 0.0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float pos = fract(t * (0.11 + fi * 0.07) + hash11(fi * 7.0 + 1.0));
    float w = 0.015 + 0.05 * hash11(fi + floor(t * 2.0));
    band += 1.0 - smoothstep(0.0, w, abs(y - pos));
  }
  band = min(band, 1.0);
  float shift = (band * 0.08 * sin(t * 11.0 + y * 45.0) + (vnoise(vec2(y * 90.0, t * 25.0)) - 0.5) * 0.012) * u_strength;
  float x = fract(v_uv.x + shift);
  vec4 m = src(vec2(x, y));
  vec4 c = vec4(src(vec2(fract(x + shift * 0.6), y)).r, m.g, src(vec2(fract(x - shift * 0.6), y)).b, m.a);
  c.rgb += band * (hash12(vec2(floor(y * u_res.y * 0.5), floor(t * 30.0))) - 0.5) * 0.35 * u_strength * c.a;
  outColor = c;
}`,static:`void main() {
  vec4 c = src(v_uv);
  float t = floor(u_time * (8.0 + u_speed * 40.0));
  float n = hash12(floor(v_uv * u_res * 0.6) + t * 17.0);
  float roll = smoothstep(0.0, 0.12, abs(fract(v_uv.y * 0.6 - u_time * 0.35) - 0.5));
  float line = 0.85 + 0.15 * hash11(floor(v_uv.y * u_res.y * 0.4) + t);
  vec3 rgb = mix(c.rgb, vec3(n) * c.a, u_strength * 0.65);
  outColor = vec4(rgb * mix(1.0, line * (0.8 + 0.2 * roll), u_strength), c.a);
}`,"slice-shift":`uniform float u_count;
void main() {
  float n = floor(mix(3.0, 20.0, u_count));
  float t = u_time * (0.3 + u_speed * 2.0);
  float id = floor(v_uv.y * n);
  float dir = mod(id, 2.0) * 2.0 - 1.0;
  float ph = fract(t + hash11(id + 1.0) * 0.25);
  float e = smoothstep(0.0, 0.18, ph) - smoothstep(0.5, 0.68, ph);
  vec4 c = src(vec2(fract(v_uv.x + dir * e * u_strength * 0.3), v_uv.y));
  c.rgb *= 1.0 - (1.0 - smoothstep(0.0, 0.04, fract(v_uv.y * n))) * e * u_strength * 0.5;
  outColor = c;
}`,"pixel-melt":`uniform float u_threshold;
void main() {
  vec4 c = src(v_uv);
  float col = hash11(floor(v_uv.x * min(u_res.x, 640.0)) + 0.5);
  float len = u_strength * 0.3 * (0.35 + 0.65 * col) * (0.75 + 0.25 * sin(u_time * rate() + col * 6.0));
  vec4 best = c; float bl = luma(unpre(c));
  for (int i = 1; i <= 20; i++) {
    vec4 s = src(v_uv + vec2(0.0, float(i) / 20.0 * len));
    float l = luma(unpre(s));
    if (l > bl && l > u_threshold) { best = s; bl = l; }
  }
  outColor = best;
}`,twirl:`uniform float u_size;
void main() {
  vec2 asp = vec2(aspect(), 1.0);
  vec2 p = (v_uv - 0.5) * asp;
  float k = 1.0 - smoothstep(0.0, 0.15 + u_size * 0.6, length(p));
  p = rot(k * k * u_strength * 5.0 * (0.65 + 0.35 * sin(u_time * rate()))) * p;
  outColor = src(p / asp + 0.5);
}`,"water-ripple":`uniform float u_size;
void main() {
  vec2 asp = vec2(aspect(), 1.0);
  vec2 p = (v_uv - 0.5) * asp;
  float r = length(p);
  float ph = r * mix(80.0, 20.0, u_size) - u_time * rate() * 5.0;
  float amp = u_strength * 0.01 * (1.0 - smoothstep(0.0, 1.0, r));
  vec2 dir = r > 1e-4 ? p / r : vec2(0.0);
  vec4 c = src(v_uv + dir / asp * sin(ph) * amp);
  c.rgb += pow(max(0.0, cos(ph)), 12.0) * amp * 18.0 * c.a;
  outColor = c;
}`,"heat-haze":`void main() {
  float t = u_time * (0.3 + u_speed * 2.0);
  vec2 q = v_uv * vec2(aspect(), 1.0) * 6.0;
  vec2 n = vec2(fbm(q + vec2(0.0, -t * 2.0)), fbm(q + vec2(5.2, -t * 2.3))) - 0.5;
  vec4 c = src(v_uv + n * 0.025 * u_strength * mix(1.0, 0.4, v_uv.y));
  outColor = repre(unpre(c) * vec3(1.0 + 0.06 * u_strength, 1.0, 1.0 - 0.06 * u_strength), c.a);
}`,"glass-tiles":`uniform float u_size;
void main() {
  float n = mix(28.0, 5.0, u_size);
  vec2 cells = vec2(floor(n * aspect() + 0.5), n);
  vec2 g = v_uv * cells; vec2 id = floor(g); vec2 f = fract(g) - 0.5;
  vec2 uv = (id + 0.5 + f * (1.0 - 0.6 * u_strength) + f * f * f * 2.4 * u_strength) / cells;
  vec4 c = src(uv);
  c.rgb *= 1.0 - smoothstep(0.43, 0.5, max(abs(f.x), abs(f.y))) * 0.35 * u_strength;
  c.rgb += (1.0 - smoothstep(0.0, 0.35, length(f - vec2(-0.2, 0.2)))) * 0.1 * u_strength * c.a;
  outColor = c;
}`,comic:`uniform float u_lines;
float lum(vec2 uv) { return luma(src(uv).rgb); }
void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c);
  vec2 o = vec2(1.0 / aspect(), 1.0) * (0.0012 + u_lines * 0.003);
  float tl = lum(v_uv + o * vec2(-1.0, 1.0)), tc = lum(v_uv + o * vec2(0.0, 1.0)), tr = lum(v_uv + o * vec2(1.0, 1.0));
  float ml = lum(v_uv - vec2(o.x, 0.0)), mr = lum(v_uv + vec2(o.x, 0.0));
  float bl = lum(v_uv - o), bc = lum(v_uv - vec2(0.0, o.y)), br = lum(v_uv + o * vec2(1.0, -1.0));
  float gx = tr + 2.0 * mr + br - tl - 2.0 * ml - bl;
  float gy = tl + 2.0 * tc + tr - bl - 2.0 * bc - br;
  float e = smoothstep(0.25, 0.6, length(vec2(gx, gy)));
  vec3 hsv = rgb2hsv(rgb);
  hsv.y = min(1.0, hsv.y * 1.35);
  hsv.z = max(0.12, floor(hsv.z * 4.0 + 0.5) / 4.0);
  vec3 pc = hsv2rgb(hsv);
  vec2 g = rot(0.785) * (v_uv * vec2(aspect(), 1.0) * 120.0);
  float dots = 1.0 - smoothstep(0.26, 0.32, length(fract(g) - 0.5));
  pc *= 1.0 - dots * (1.0 - smoothstep(0.15, 0.55, luma(rgb))) * 0.45;
  pc = mix(pc, vec3(0.04), e);
  outColor = repre(mix(rgb, pc, u_strength), c.a);
}`,"oil-paint":`uniform float u_size;
void main() {
  vec2 st = vec2(1.0 / aspect(), 1.0) * (0.0008 + u_size * 0.0035);
  float best = 1e9; vec3 res = vec3(0.0);
  for (int q = 0; q < 4; q++) {
    vec2 sg = vec2(q == 0 || q == 2 ? -1.0 : 1.0, q < 2 ? -1.0 : 1.0);
    vec3 mean = vec3(0.0); vec3 sq = vec3(0.0);
    for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) {
      vec3 x = src(v_uv + vec2(float(i), float(j)) * sg * st).rgb;
      mean += x; sq += x * x;
    }
    mean /= 16.0;
    vec3 v = abs(sq / 16.0 - mean * mean);
    float s = v.r + v.g + v.b;
    if (s < best) { best = s; res = mean; }
  }
  vec4 c = src(v_uv);
  outColor = vec4(mix(c.rgb, res, u_strength), c.a);
}`,"type-mosaic":`uniform float u_size, u_color;
float glyph(vec2 f, float l) {
  vec2 p = f - 0.5; vec2 a = abs(p); float w = 0.08;
  if (l < 0.12) return 0.0;
  if (l < 0.26) return step(length(p), 0.1);
  if (l < 0.4) return step(a.y, w) * step(a.x, 0.3);
  if (l < 0.55) return max(step(a.y, w) * step(a.x, 0.32), step(a.x, w) * step(a.y, 0.32));
  if (l < 0.7) return max(step(abs(p.x - p.y), w * 1.3), step(abs(p.x + p.y), w * 1.3)) * step(max(a.x, a.y), 0.33);
  if (l < 0.85) return max(step(abs(a.x - 0.15), w * 0.8) * step(a.y, 0.36), step(abs(a.y - 0.15), w * 0.8) * step(a.x, 0.36));
  return step(max(a.x, a.y), 0.38);
}
void main() {
  float n = mix(80.0, 24.0, u_size);
  vec2 cells = vec2(floor(n * aspect() / 0.62), n);
  vec2 g = v_uv * cells; vec2 id = floor(g);
  vec4 c = src((id + 0.5) / cells);
  vec3 rgb = unpre(c); float l = luma(rgb);
  vec3 ink = mix(vec3(0.3, 1.0, 0.5) * (0.55 + 0.6 * l), clamp(rgb * 1.35, 0.0, 1.0), u_color);
  outColor = vec4(ink * glyph(fract(g), l) * c.a, c.a);
}`,"hex-tiles":`uniform float u_size, u_gap;
void main() {
  float n = mix(60.0, 10.0, u_size);
  vec2 asp = vec2(aspect(), 1.0);
  vec2 p = v_uv * asp * n;
  vec2 r = vec2(1.0, 1.7320508); vec2 hr = r * 0.5;
  vec2 c1 = (floor(p / r) + 0.5) * r;
  vec2 c2 = (floor((p - hr) / r) + 0.5) * r + hr;
  vec2 ctr = dot(p - c1, p - c1) < dot(p - c2, p - c2) ? c1 : c2;
  vec2 q = abs(p - ctr);
  float d = max(q.x, q.x * 0.5 + q.y * 0.8660254);
  vec4 col = src(ctr / n / asp);
  float lim = 0.5 - u_gap * 0.12;
  col.rgb *= 1.0 - smoothstep(lim - 0.02, lim, d) * 0.85;
  col.rgb += (1.0 - smoothstep(0.0, 0.45, length(p - ctr + vec2(0.15, -0.2)))) * 0.06 * col.a;
  outColor = col;
}`,crosshatch:`uniform float u_density;
void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c); float l = luma(rgb);
  vec2 p = v_uv * vec2(aspect(), 1.0) * mix(70.0, 200.0, u_density);
  float wob = vnoise(p * 0.08) * 0.8;
  float h1 = abs(fract((p.x + p.y) * 0.5 + wob) - 0.5);
  float h2 = abs(fract((p.x - p.y) * 0.5 + wob) - 0.5);
  float h3 = abs(fract(p.y * 0.7 + wob * 0.5) - 0.5);
  float ink = (1.0 - smoothstep(0.55, 0.85, l)) * (1.0 - smoothstep(0.08, 0.2, h1));
  ink = max(ink, (1.0 - smoothstep(0.35, 0.6, l)) * (1.0 - smoothstep(0.08, 0.2, h2)));
  ink = max(ink, (1.0 - smoothstep(0.15, 0.35, l)) * (1.0 - smoothstep(0.08, 0.2, h3)));
  vec2 o = vec2(1.0 / aspect(), 1.0) * 0.0015;
  float e = abs(luma(src(v_uv + vec2(o.x, 0.0)).rgb) - luma(src(v_uv - vec2(o.x, 0.0)).rgb)) + abs(luma(src(v_uv + vec2(0.0, o.y)).rgb) - luma(src(v_uv - vec2(0.0, o.y)).rgb));
  e = smoothstep(0.08, 0.3, e);
  vec3 col = mix(vec3(0.97, 0.955, 0.92), vec3(0.16, 0.16, 0.2), clamp(max(ink * 0.8, e), 0.0, 1.0));
  outColor = repre(mix(rgb, col, u_strength), c.a);
}`,thermal:`uniform float u_shift;
vec3 heat(float x) {
  x = clamp(x, 0.0, 1.0);
  vec3 a = mix(vec3(0.02, 0.0, 0.18), vec3(0.45, 0.0, 0.6), smoothstep(0.0, 0.25, x));
  a = mix(a, vec3(0.92, 0.1, 0.15), smoothstep(0.25, 0.5, x));
  a = mix(a, vec3(1.0, 0.62, 0.0), smoothstep(0.5, 0.75, x));
  return mix(a, vec3(1.0, 1.0, 0.85), smoothstep(0.75, 1.0, x));
}
void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c);
  outColor = repre(mix(rgb, heat(luma(rgb) + u_shift), u_strength), c.a);
}`,"night-scope":`uniform float u_noise;
void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c);
  float l = pow(clamp(luma(rgb) * 1.6 + 0.05, 0.0, 1.0), 0.8);
  l += (hash12(v_uv * u_res + floor(u_time * 24.0) * 31.0) - 0.5) * u_noise * 0.35;
  vec3 g = vec3(0.15, 1.0, 0.3) * l * (0.9 + 0.1 * sin(v_uv.y * min(u_res.y, 600.0) * 1.5));
  vec2 p = (v_uv - 0.5) * vec2(aspect(), 1.0);
  g *= 1.0 - smoothstep(0.46, 0.5, length(p));
  g *= 1.0 - smoothstep(0.2, 0.5, length(p)) * 0.4;
  outColor = repre(mix(rgb, g, u_strength), c.a);
}`,disco:`void main() {
  vec4 c = src(v_uv);
  vec2 p = v_uv * vec2(aspect(), 1.0);
  float t = u_time * rate();
  vec3 light = vec3(0.0);
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    vec2 ctr = vec2((0.5 + sin(t * (0.7 + fi * 0.23) + fi * 2.1) * 0.45) * aspect(), 0.5 + cos(t * (0.9 + fi * 0.17) + fi) * 0.4);
    light += hue2rgb(fract(fi * 0.25 + t * 0.05)) * (1.0 - smoothstep(0.0, 0.34, length(p - ctr)));
  }
  vec2 g = p * 22.0 + vec2(t * 0.5, 0.0);
  float s = step(0.93, hash12(floor(g) + floor(t * 6.0))) * (1.0 - smoothstep(0.0, 0.25, length(fract(g) - 0.5)));
  vec3 rgb = c.rgb * (1.0 - 0.45 * u_strength) + c.rgb * light * u_strength * 1.2 + (light * 0.15 + s * 0.8) * u_strength * c.a;
  outColor = vec4(rgb, c.a);
}`,confetti:`vec4 piece(vec2 uv, float sc, float t, float seed) {
  vec2 p = uv * vec2(aspect(), 1.0) * sc;
  p.y += t * (0.8 + 0.3 * hash11(seed));
  vec2 id = floor(p); vec2 f = fract(p) - 0.5;
  float h = hash12(id + seed);
  if (h > u_strength * 0.75) return vec4(0.0);
  vec2 o = (hash22(id + seed * 3.1) - 0.5) * 0.45;
  o.x += sin(t * 1.7 + h * 20.0) * 0.12;
  vec2 q = rot(h * 6.28 + t * (h - 0.5) * 4.0) * (f - o);
  float spin = t * (2.0 + 5.0 * h) + h * 10.0;
  q.x /= max(0.2, abs(cos(spin)));
  float r = 0.1 + 0.05 * hash12(id * 2.3 + seed);
  float m = (1.0 - smoothstep(r - 0.02, r, abs(q.x))) * (1.0 - smoothstep(r * 0.5 - 0.02, r * 0.5, abs(q.y)));
  vec3 col = (hue2rgb(fract(h * 7.13 + seed)) * 0.85 + 0.12) * (0.7 + 0.3 * abs(cos(spin)));
  return vec4(col, m);
}
void main() {
  vec4 c = src(v_uv);
  float t = u_time * (0.3 + u_speed * 2.0);
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec4 k = piece(v_uv, 12.0 - fi * 3.5, t * (0.8 + fi * 0.25), fi * 31.0 + 1.0);
    c = over(c, k.rgb, k.a);
  }
  outColor = c;
}`,hearts:`uniform vec3 u_color;
float heartF(vec2 p) { p.y += 0.15; float a = p.x * p.x + p.y * p.y - 1.0; return a * a * a - p.x * p.x * p.y * p.y * p.y; }
void main() {
  vec4 c = src(v_uv);
  float t = u_time * (0.2 + u_speed * 1.5);
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 p = v_uv * vec2(aspect(), 1.0) * (9.0 - fi * 2.5);
    p.y -= t * (0.6 + fi * 0.25);
    vec2 id = floor(p); vec2 f = fract(p) - 0.5;
    float h = hash12(id + fi * 13.0);
    if (h > u_strength * 0.6) continue;
    vec2 o = (hash22(id + fi) - 0.5) * 0.25;
    o.x += sin(t * 2.0 + h * 30.0) * 0.06;
    float s = 0.16 + 0.08 * hash12(id * 1.9);
    vec2 q = rot(sin(t * 1.5 + h * 9.0) * 0.3) * (f - o) / s;
    float m = 1.0 - smoothstep(-0.05, 0.05, heartF(q));
    vec3 col = mix(u_color, vec3(1.0), 0.1 + 0.2 * hash12(id + 2.0));
    col *= 0.85 + 0.25 * (1.0 - smoothstep(-0.4, 0.6, q.y + q.x * 0.3));
    c = over(c, col, m * (0.75 + 0.125 * fi));
  }
  outColor = c;
}`,"hue-cycle":`void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c); vec3 hsv = rgb2hsv(rgb);
  hsv.x = fract(hsv.x + u_time * rate() * 0.15);
  hsv.y = min(1.0, hsv.y * (1.0 + 0.3 * u_strength));
  outColor = repre(mix(rgb, hsv2rgb(hsv), u_strength), c.a);
}`,"color-strobe":`void main() {
  vec4 c = src(v_uv); vec3 rgb = unpre(c);
  float beat = u_time * (80.0 + u_speed * 100.0) / 60.0;
  float k = exp(-fract(beat) * 8.0);
  vec3 col = hue2rgb(fract(floor(beat) * 0.37));
  vec3 lit = mix(rgb, rgb * col * 1.6 + col * 0.25, k * u_strength);
  outColor = repre(mix(lit, lit * 0.6, (1.0 - k) * u_strength * 0.5), c.a);
}`,"film-strip":`uniform float u_size;
void main() {
  float band = 0.07 + u_size * 0.08;
  vec2 uv = (v_uv - 0.5) / (1.0 - 2.0 * band) + 0.5;
  vec4 img = inside(uv) ? src(uv) : vec4(0.0);
  float hy = abs(v_uv.y - 0.5) - (0.5 - band * 0.5);
  float pitch = band * 1.1;
  float fx = mod(v_uv.x * aspect() + u_time * u_speed * 0.3, pitch) - pitch * 0.5;
  float sd = sdBox(vec2(fx, hy), vec2(pitch * 0.28, band * 0.26)) - band * 0.06;
  float hole = (1.0 - smoothstep(-0.002, 0.002, sd)) * step(0.5 - band, abs(v_uv.y - 0.5));
  vec4 film = vec4(mix(vec3(0.07, 0.06, 0.055), vec3(0.92, 0.9, 0.85), hole), 1.0);
  outColor = img + film * (1.0 - img.a);
}`,"instant-photo":`uniform float u_size; uniform vec3 u_color;
void main() {
  float m = 0.04 + u_size * 0.06;
  vec2 lo = vec2(m / aspect(), m * 3.0);
  vec2 hi = vec2(1.0 - m / aspect(), 1.0 - m);
  vec2 sz = hi - lo;
  vec2 uv = (v_uv - lo) / sz;
  float areaA = sz.x * aspect() / sz.y;
  vec2 k = areaA > aspect() ? vec2(1.0, aspect() / areaA) : vec2(areaA / aspect(), 1.0);
  vec2 dd = max(lo - v_uv, v_uv - hi);
  float outside = max(dd.x, dd.y);
  vec3 paper = u_color * (0.96 + 0.04 * vnoise(v_uv * vec2(aspect(), 1.0) * 180.0));
  if (outside > 0.0) { outColor = vec4(paper * (1.0 - 0.12 * (1.0 - smoothstep(0.0, 0.01, outside))), 1.0); return; }
  vec4 img = src((uv - 0.5) * k + 0.5);
  vec3 rgb = unpre(img);
  rgb = mix(rgb, rgb * vec3(1.04, 1.0, 0.92) + 0.03, 0.6) * (1.0 - 0.25 * smoothstep(0.3, 0.75, length(uv - 0.5)));
  vec4 photo = repre(rgb, img.a);
  outColor = photo + vec4(0.08, 0.08, 0.09, 1.0) * (1.0 - photo.a);
}`,"rounded-frame":`uniform float u_size, u_radius; uniform vec3 u_color;
void main() {
  vec2 asp = vec2(aspect(), 1.0);
  float s = 1.0 - u_size * 0.3;
  vec2 p = (v_uv - 0.5) * asp;
  vec2 hb = 0.5 * asp * s;
  float r = u_radius * 0.12;
  float sd = sdBox(p, hb - r) - r;
  vec4 img = src((v_uv - 0.5) / s + 0.5) * (1.0 - smoothstep(-0.0015, 0.0015, sd));
  float shadow = (1.0 - smoothstep(-0.01, 0.05, sdBox(p + vec2(0.0, 0.012), hb - r) - r)) * 0.45;
  vec3 bg = u_color * (1.0 + 0.3 * (v_uv.y - 0.5)) * (1.0 - shadow);
  outColor = img + vec4(bg, 1.0) * (1.0 - img.a);
}`,viewfinder:`uniform vec3 u_color;
void main() {
  vec4 c = src(v_uv);
  float A = aspect();
  vec2 p = v_uv * vec2(A, 1.0);
  float lw = 0.0045; float m = 0.06; float L = 0.085;
  vec2 q = vec2(min(p.x, A - p.x), min(p.y, 1.0 - p.y)) - m;
  float ink = max(step(abs(q.x), lw) * step(-lw, q.y) * step(q.y, L), step(abs(q.y), lw) * step(-lw, q.x) * step(q.x, L));
  vec2 cc = p - vec2(0.5 * A, 0.5);
  ink = max(ink, step(abs(cc.x), lw * 0.6) * step(abs(cc.y), 0.03));
  ink = max(ink, step(abs(cc.y), lw * 0.6) * step(abs(cc.x), 0.03));
  float grid = max(step(abs(p.x - A / 3.0), 0.0012), step(abs(p.x - 2.0 * A / 3.0), 0.0012));
  grid = max(grid, max(step(abs(p.y - 1.0 / 3.0), 0.0012), step(abs(p.y - 2.0 / 3.0), 0.0012)));
  float rec = (1.0 - smoothstep(0.014, 0.017, length(p - vec2(m + 0.04, 1.0 - m - 0.04)))) * step(0.5, fract(u_time));
  vec2 bp = p - vec2(A - m - 0.08, 1.0 - m - 0.04);
  float bat = step(abs(sdBox(bp, vec2(0.035, 0.016))), lw * 0.7);
  bat = max(bat, step(sdBox(bp - vec2(0.041, 0.0), vec2(0.004, 0.007)), 0.0));
  bat = max(bat, step(sdBox(bp - vec2(-0.008, 0.0), vec2(0.022, 0.009)), 0.0));
  vec4 o = c;
  o.rgb *= 1.0 - 0.15 * u_strength * smoothstep(0.4, 0.9, length((v_uv - 0.5) * 2.0));
  o = over(o, u_color, max(ink, bat) * u_strength * 0.95);
  o = over(o, u_color, grid * u_strength * 0.25);
  outColor = over(o, vec3(1.0, 0.15, 0.12), rec * u_strength);
}`,"neon-border":`uniform float u_size; uniform vec3 u_color;
void main() {
  vec4 c = src(v_uv);
  vec2 asp = vec2(aspect(), 1.0);
  vec2 p = (v_uv - 0.5) * asp;
  float r = 0.04;
  float sd = sdBox(p, 0.5 * asp - 0.04 - r) - r;
  float w = 0.0015 + u_size * 0.006;
  float line = 1.0 - smoothstep(w * 0.5, w, abs(sd));
  float glow = exp(-abs(sd) / (0.01 + u_size * 0.03));
  float chase = 0.75 + 0.25 * sin((atan(p.y, p.x) / TAU - u_time * u_speed * 0.5) * TAU * 3.0);
  c.rgb *= mix(1.0, 0.6, smoothstep(0.0, 0.02, sd));
  outColor = vec4(c.rgb + mix(u_color, vec3(1.0), line * 0.6) * (line + glow * 0.7) * chase, max(c.a, line));
}`,"blur-fill":`uniform float u_size;
void main() {
  float s = 1.0 - u_size * 0.5;
  vec2 uv = (v_uv - 0.5) / s + 0.5;
  vec2 bu = (v_uv - 0.5) * 0.82 + 0.5;
  vec2 r = vec2(1.0 / aspect(), 1.0) * 0.04;
  vec4 bg = vec4(0.0); float j = hash12(v_uv * u_res) * TAU;
  for (int i = 0; i < 40; i++) { float a = float(i) * 2.39996323 + j; float d = sqrt((float(i) + 0.5) / 40.0); bg += src(bu + vec2(cos(a), sin(a)) * d * r); }
  bg /= 40.0;
  bg.rgb *= 0.65 * (1.0 - (1.0 - smoothstep(0.0, 0.03, sdBox(v_uv - 0.5 + vec2(0.0, 0.006), vec2(0.5 * s)))) * 0.35);
  vec4 fg = inside(uv) ? src(uv) : vec4(0.0);
  outColor = fg + bg * (1.0 - fg.a);
}`,snow:`uniform float u_size;
void main() {
  vec4 c = src(v_uv);
  vec2 asp = vec2(aspect(), 1.0);
  float acc = 0.0;
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float sc = (4.0 + fi * 2.7) / (0.5 + u_size);
    float t = u_time * (0.15 + u_speed * 0.9) * (1.2 - fi * 0.18);
    vec2 p = v_uv * asp * sc;
    p.y += t * sc * 0.35;
    p.x += sin(t * 1.3 + p.y * 0.7 + fi) * 0.3;
    vec2 id = floor(p); vec2 f = fract(p) - 0.5;
    float h = hash12(id + fi * 17.0);
    if (h > u_strength * 0.75) continue;
    vec2 o = (hash22(id + fi) - 0.5) * 0.6;
    float r = (0.05 + 0.06 * hash12(id * 3.1)) * (1.4 - fi * 0.25);
    acc += (1.0 - smoothstep(r * 0.2, r, length(f - o))) * (1.0 - fi * 0.15);
  }
  c.rgb = mix(c.rgb, c.rgb * vec3(0.93, 0.97, 1.06), u_strength * 0.5);
  outColor = over(c, vec3(1.0), clamp(acc, 0.0, 1.0) * 0.92);
}`,rain:`uniform float u_angle;
void main() {
  vec4 c = src(v_uv);
  vec2 p0 = rot(radians(u_angle)) * (v_uv * vec2(aspect(), 1.0));
  float acc = 0.0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 sc = vec2(60.0 + fi * 40.0, 3.0 + fi * 2.0);
    vec2 p = p0 * sc;
    p.y += u_time * (1.5 + u_speed * 4.5) * (1.0 - fi * 0.2) * sc.y;
    vec2 id = floor(p); vec2 f = fract(p);
    if (hash12(id + fi * 7.0) > u_strength * 0.6) continue;
    float len = 0.25 + 0.3 * hash12(id + 5.0);
    float streak = (1.0 - smoothstep(0.0, len, fract(f.y - hash12(id + 3.0)))) * (1.0 - smoothstep(0.05, 0.2, abs(f.x - 0.5)));
    acc += streak * (0.5 - fi * 0.12);
  }
  c.rgb *= mix(1.0, 0.82, u_strength);
  c.rgb = mix(c.rgb, c.rgb * vec3(0.92, 0.97, 1.05), u_strength);
  outColor = over(c, vec3(0.85, 0.9, 0.97), clamp(acc * 1.6, 0.0, 1.0) * 0.75);
}`,fog:`uniform vec3 u_color;
void main() {
  vec4 c = src(v_uv);
  float t = u_time * (0.05 + u_speed * 0.4);
  vec2 q = v_uv * vec2(aspect(), 1.0) * 2.5;
  float n = fbm(q + vec2(t, t * 0.3));
  n = fbm(q + n * 1.5 + vec2(-t * 0.6, 0.0));
  float f = clamp(smoothstep(0.25, 0.85, n) * u_strength * 1.1 * mix(1.0, 0.55, v_uv.y) + u_strength * 0.12, 0.0, 0.92);
  outColor = over(c, u_color, f);
}`,fireflies:`uniform vec3 u_color;
void main() {
  vec4 c = src(v_uv);
  vec2 asp = vec2(aspect(), 1.0);
  float t = u_time * (0.2 + u_speed);
  vec3 light = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    vec2 p = v_uv * asp * (5.0 + fi * 4.0);
    vec2 id = floor(p);
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 cid = id + vec2(float(x), float(y));
      float h = hash12(cid + fi * 11.0);
      if (h > u_strength * 0.8) continue;
      vec2 pos = cid + 0.5 + vec2(sin(t * (0.5 + h) + h * 30.0), cos(t * (0.4 + h * 0.7) + h * 50.0)) * 0.45;
      float d = length(p - pos);
      float blink = smoothstep(0.2, 1.0, 0.5 + 0.5 * sin(t * (2.0 + h * 3.0) + h * 70.0));
      light += u_color * ((1.0 - smoothstep(0.0, 0.06, d)) * 1.2 + exp(-d * 9.0) * 0.35) * blink;
    }
  }
  outColor = vec4(c.rgb * (1.0 - 0.15 * u_strength) + light, c.a);
}`,embers:`void main() {
  vec4 c = src(v_uv);
  vec2 asp = vec2(aspect(), 1.0);
  float t = u_time * (0.2 + u_speed * 1.5);
  vec3 light = vec3(0.0);
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 p = v_uv * asp * (6.0 + fi * 5.0);
    p.y -= t * (1.0 + fi * 0.4) * 1.2;
    p.x += sin(p.y * 0.8 + t + fi) * 0.25;
    vec2 id = floor(p); vec2 f = fract(p) - 0.5;
    float h = hash12(id + fi * 5.0);
    if (h > u_strength * 0.55) continue;
    vec2 q = f - (hash22(id + fi) - 0.5) * 0.6;
    q.y *= 0.45;
    float d = length(q);
    vec3 col = mix(vec3(1.0, 0.35, 0.05), vec3(1.0, 0.85, 0.4), hash12(id * 1.3));
    light += col * ((1.0 - smoothstep(0.0, 0.05, d)) + exp(-d * 18.0) * 0.4) * (0.6 + 0.4 * sin(t * 9.0 + h * 40.0)) * (1.0 - fi * 0.25);
  }
  float heat = (1.0 - smoothstep(0.0, 0.5, v_uv.y)) * 0.25 * u_strength;
  outColor = vec4(c.rgb + light + vec3(1.0, 0.4, 0.1) * heat * c.a, c.a);
}`},Ie=`
const float PI = 3.14159265;
const float TAU = 6.28318531;
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec4 Ac(vec2 uv) { return texture(u_from, clamp(uv, 0.0, 1.0)); }
vec4 Bc(vec2 uv) { return texture(u_to, clamp(uv, 0.0, 1.0)); }
bool inside(vec2 uv) { return uv.x >= 0.0 && uv.y >= 0.0 && uv.x <= 1.0 && uv.y <= 1.0; }
float easeIn(float p) { return p * p * p; }
float easeOut(float p) { float q = 1.0 - p; return 1.0 - q * q * q; }
// Pulls back a little, then overshoots and settles.
float backInOut(float p) {
  float c = 1.70158 * 1.525;
  if (p < 0.5) { float x = 2.0 * p; return x * x * ((c + 1.0) * x - c) / 2.0; }
  float x = 2.0 * p - 2.0; return (x * x * ((c + 1.0) * x + c) + 2.0) / 2.0;
}
vec2 hash22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0; float a = 0.5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.7); a *= 0.5; } return s / 0.9375; }
mat2 rot(float a) { float c = cos(a); float s = sin(a); return mat2(c, -s, s, c); }
`,Le={"luma-fade":`void main() {
  vec4 a = A(v_uv); vec4 b = B(v_uv);
  float r = (1.0 - luma(b.a > 0.0 ? b.rgb / b.a : b.rgb)) * 0.7;
  outColor = mix(a, b, smoothstep(r, r + 0.3, ease(u_progress)));
}`,"noise-dissolve":`void main() {
  float n = vnoise(v_uv * vec2(aspect(), 1.0) * 7.0) * 0.65 + hash12(floor(v_uv * u_res * 0.5)) * 0.35;
  float m = smoothstep(n * 0.8, n * 0.8 + 0.2, u_progress);
  vec4 c = mix(A(v_uv), B(v_uv), m);
  outColor = vec4(c.rgb + smoothstep(0.0, 0.5, m) * (1.0 - smoothstep(0.5, 1.0, m)) * 0.35 * c.a, c.a);
}`,"cover-left":`void main() {
  float p = ease(u_progress); float x0 = 1.0 - p;
  if (v_uv.x >= x0) { outColor = B(v_uv - vec2(x0, 0.0)); return; }
  vec4 a = A(v_uv);
  float sh = exp(-(x0 - v_uv.x) * 40.0) * 0.5 * step(0.001, p);
  outColor = vec4(a.rgb * (1.0 - 0.35 * p) * (1.0 - sh), a.a);
}`,"reveal-right":`void main() {
  float p = ease(u_progress);
  if (v_uv.x >= p) { outColor = A(v_uv - vec2(p, 0.0)); return; }
  vec4 b = B(v_uv);
  float sh = exp(-(p - v_uv.x) * 40.0) * 0.5 * step(p, 0.999);
  outColor = vec4(b.rgb * (0.65 + 0.35 * p) * (1.0 - sh), b.a);
}`,"bounce-push":`void main() {
  vec2 uv = v_uv + vec2(backInOut(u_progress), 0.0);
  outColor = uv.x < 1.0 ? Ac(uv) : Bc(uv - vec2(1.0, 0.0));
}`,"corner-slide":`void main() {
  float p = ease(u_progress);
  vec2 uv = v_uv - vec2(1.0 - p);
  if (uv.x >= 0.0 && uv.y >= 0.0) { outColor = B(uv); return; }
  vec4 a = A(v_uv);
  float d = max(-uv.x, -uv.y);
  float sh = exp(-d * 40.0) * 0.5 * step(0.001, p);
  outColor = vec4(a.rgb * (1.0 - 0.35 * p) * (1.0 - sh), a.a);
}`,stripes:`void main() {
  float n = 8.0;
  float id = floor(v_uv.y * n);
  float p = ease(clamp((u_progress - id / (n - 1.0) * 0.35) / 0.65, 0.0, 1.0));
  float dir = mod(id, 2.0) < 0.5 ? 1.0 : -1.0;
  vec2 uv = v_uv - vec2(dir * (1.0 - p), 0.0);
  outColor = (uv.x >= 0.0 && uv.x <= 1.0) ? B(uv) : A(v_uv);
}`,"diagonal-wipe":`void main() {
  float d = (v_uv.x * aspect() + (1.0 - v_uv.y)) / (aspect() + 1.0);
  float p = ease(u_progress) * 1.1 - 0.05;
  vec4 c = mix(A(v_uv), B(v_uv), smoothstep(d - 0.03, d + 0.03, p));
  float line = (1.0 - smoothstep(0.0, 0.012, abs(d - p))) * step(0.01, u_progress) * step(u_progress, 0.99);
  outColor = vec4(c.rgb + line * 0.4 * c.a, c.a);
}`,"heart-iris":`float heartF(vec2 p) { p.y += 0.15; float a = p.x * p.x + p.y * p.y - 1.0; return a * a * a - p.x * p.x * p.y * p.y * p.y; }
void main() {
  vec2 p = (v_uv - 0.5) * vec2(aspect(), 1.0);
  float s = ease(u_progress) * 3.2 + 1e-3;
  float m = 1.0 - smoothstep(-0.02, 0.02, heartF(p / s * 2.0));
  outColor = mix(A(v_uv), B(v_uv), m);
}`,"star-iris":`float starF(vec2 p) {
  float seg = TAU / 5.0;
  float k = abs(mod(atan(p.x, p.y), seg) - seg * 0.5) / (seg * 0.5);
  return length(p) / mix(0.45, 1.0, k);
}
void main() {
  float e = ease(u_progress);
  vec2 p = rot(e * 1.2) * ((v_uv - 0.5) * vec2(aspect(), 1.0));
  float m = 1.0 - smoothstep(0.97, 1.03, starF(p / (e * 2.6 + 1e-3)));
  outColor = mix(A(v_uv), B(v_uv), m);
}`,checker:`void main() {
  float ny = 6.0; float nx = floor(ny * aspect() + 0.5);
  vec2 g = v_uv * vec2(nx, ny); vec2 id = floor(g); vec2 f = fract(g) - 0.5;
  float d = (id.x + id.y) / (nx + ny) * 0.5 + hash12(id) * 0.1;
  float p = ease(clamp((u_progress - d) / 0.4, 0.0, 1.0));
  outColor = mix(A(v_uv), B(v_uv), step(max(abs(f.x), abs(f.y)), p * 0.5 + 1e-4) * step(0.0001, p));
}`,"fan-wipe":`void main() {
  vec2 p = (v_uv - 0.5) * vec2(aspect(), 1.0);
  float f = fract((atan(p.y, p.x) / TAU + 0.5) * 4.0);
  outColor = mix(A(v_uv), B(v_uv), smoothstep(f - 0.01, f + 0.01, ease(u_progress) * 1.03 - 0.015));
}`,"wave-wipe":`void main() {
  float edge = ease(u_progress) * 1.3 - 0.15 + sin(v_uv.y * 14.0 + u_progress * 8.0) * 0.05;
  outColor = mix(A(v_uv), B(v_uv), smoothstep(v_uv.x - 0.015, v_uv.x + 0.015, edge));
}`,"zoom-punch":`void main() {
  float p = u_progress; float s = sin(p * PI); float e = ease(p);
  vec2 c = v_uv - 0.5;
  float zA = 1.0 + e * 0.8; float zB = 1.0 + (1.0 - e) * 0.8;
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 12; i++) {
    float k = 1.0 - s * 0.25 * float(i) / 11.0;
    acc += p < 0.5 ? Ac(c * k / zA + 0.5) : Bc(c * k / zB + 0.5);
  }
  acc /= 12.0;
  outColor = vec4(acc.rgb + s * s * s * s * 0.25 * acc.a, acc.a);
}`,twist:`void main() {
  float p = u_progress; float s = sin(p * PI);
  vec2 asp = vec2(aspect(), 1.0);
  vec2 q = (v_uv - 0.5) * asp;
  float ang = s * s * 7.0 * (1.0 - smoothstep(0.0, 0.9, length(q)));
  outColor = mix(Ac(rot(ang) * q / asp + 0.5), Bc(rot(-ang) * q / asp + 0.5), smoothstep(0.4, 0.6, p));
}`,roll:`void main() {
  float p = ease(u_progress);
  vec2 asp = vec2(aspect(), 1.0);
  vec2 q = (v_uv - 0.5) * asp;
  vec2 qa = rot(-p * PI * 0.5) * q * (1.0 + p * 1.2);
  vec2 qb = rot((1.0 - p) * PI * 0.5) * q * (1.0 + (1.0 - p) * 1.2);
  outColor = mix(A(qa / asp + 0.5), B(qb / asp + 0.5), smoothstep(0.3, 0.7, u_progress));
}`,"light-sweep":`void main() {
  float d = (v_uv.x * aspect() + v_uv.y * 0.6) / (aspect() + 0.6);
  float x = ease(u_progress) * 1.5 - 0.25;
  vec4 c = mix(A(v_uv), B(v_uv), smoothstep(x + 0.04, x - 0.04, d));
  float k = (d - x) / 0.07;
  float band = exp(-k * k);
  outColor = vec4(c.rgb + vec3(1.0, 0.97, 0.9) * band * 1.1, max(c.a, band));
}`,"film-burn":`void main() {
  float v = fbm(v_uv * vec2(aspect(), 1.0) * 2.5 + 3.0);
  float d = ease(u_progress) * 1.5 - 0.25 - v;
  float glow = exp(-abs(d - 0.05) * 25.0);
  float s = sin(u_progress * PI);
  vec4 c = mix(A(v_uv), B(v_uv), smoothstep(0.0, 0.15, d));
  vec3 hot = mix(vec3(1.0, 0.35, 0.05), vec3(1.0, 0.9, 0.6), glow);
  outColor = vec4(c.rgb + hot * glow * 1.4 * s + vec3(1.0, 0.6, 0.25) * s * s * 0.25, c.a);
}`,"flare-pass":`void main() {
  float p = u_progress; float s = sin(p * PI);
  vec4 c = mix(A(v_uv), B(v_uv), smoothstep(0.42, 0.58, p));
  vec2 d = (v_uv - vec2(mix(-0.1, 1.1, ease(p)), 0.55)) * vec2(aspect(), 1.0);
  float core = 0.02 / (length(d) + 0.02);
  float streak = exp(-abs(d.y) * 70.0) * exp(-abs(d.x) * 1.2);
  vec3 f = vec3(1.0, 0.95, 0.85) * core * 0.6 + vec3(0.55, 0.75, 1.0) * streak * 0.9;
  outColor = vec4(c.rgb * (1.0 + s * s * 0.5) + f * s + s * s * s * 0.15, c.a);
}`,"channel-tear":`void main() {
  float p = u_progress; float s = sin(p * PI);
  float t = floor(p * 14.0);
  vec2 uv = v_uv + vec2(0.0, (hash11(floor(v_uv.x * 18.0) + t * 3.1) - 0.5) * 0.25 * s);
  vec2 o = vec2(0.02 * s, 0.0);
  vec4 r = p < 0.42 ? Ac(uv + o) : Bc(uv + o);
  vec4 g = p < 0.5 ? Ac(uv) : Bc(uv);
  vec4 b = p < 0.58 ? Ac(uv - o) : Bc(uv - o);
  outColor = vec4(r.r, g.g, b.b, g.a);
}`,melt:`void main() {
  float n = vnoise(vec2(v_uv.x * 18.0, 0.5)) * 0.6 + hash11(floor(v_uv.x * 120.0)) * 0.15;
  float y = v_uv.y + easeIn(u_progress) * (1.0 + n * 1.5) * 1.1;
  outColor = y > 1.0 ? B(v_uv) : A(vec2(v_uv.x, y));
}`,shatter:`void main() {
  vec2 asp = vec2(aspect(), 1.0);
  vec2 g = v_uv * asp * 5.0; vec2 id = floor(g);
  float best = 9.0; float second = 9.0; vec2 cell = id;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 c = id + vec2(float(x), float(y));
    float d = length(g - c - hash22(c));
    if (d < best) { second = best; best = d; cell = c; } else if (d < second) second = d;
  }
  float q = clamp((u_progress - hash12(cell * 1.3) * 0.5) / 0.5, 0.0, 1.0);
  q *= q;
  vec2 vel = (hash22(cell * 2.7) - 0.5) * vec2(0.6, 0.3) + vec2(0.0, -0.9);
  vec4 a = A(v_uv - vel * q / asp) * (1.0 - q);
  float crack = (1.0 - smoothstep(0.0, 0.04, second - best)) * step(0.001, u_progress) * (1.0 - q);
  a.rgb = mix(a.rgb, vec3(0.9) * a.a, crack * 0.6);
  outColor = a + B(v_uv) * (1.0 - a.a);
}`,"wave-warp":`void main() {
  float p = u_progress; float s = sin(p * PI);
  vec2 uv = v_uv + vec2(sin(v_uv.y * 22.0 + p * 12.0) * 0.045, cos(v_uv.x * 16.0 + p * 9.0) * 0.03) * s;
  outColor = mix(Ac(uv), Bc(uv), smoothstep(0.3, 0.7, p));
}`,cube:`void main() {
  float th = ease(u_progress) * PI * 0.5;
  vec2 sp = (v_uv - 0.5) * (1.0 + 0.35 * sin(u_progress * PI));
  float D = 2.2;
  vec3 o = vec3(0.0, 0.0, -D); vec3 d = vec3(sp, D); vec3 nd = normalize(d);
  float cs = cos(th); float sn = sin(th);
  vec3 piv = vec3(0.0, 0.0, 0.5);
  vec3 cA = piv + vec3(-0.5 * sn, 0.0, -0.5 * cs); vec3 nA = vec3(-sn, 0.0, -cs); vec3 tA = vec3(cs, 0.0, -sn);
  vec3 cB = piv + vec3(0.5 * cs, 0.0, -0.5 * sn); vec3 nB = vec3(cs, 0.0, -sn); vec3 tB = vec3(sn, 0.0, cs);
  vec4 col = vec4(0.0); float best = 1e9;
  float dn = dot(d, nA);
  if (dn < 0.0) {
    float t = dot(cA - o, nA) / dn; vec3 h = o + d * t;
    vec2 uv = vec2(dot(h - cA, tA) + 0.5, h.y + 0.5);
    if (t > 0.0 && inside(uv)) { vec4 a = A(uv); col = vec4(a.rgb * (0.45 + 0.55 * -dot(nd, nA)), a.a); best = t; }
  }
  dn = dot(d, nB);
  if (dn < 0.0) {
    float t = dot(cB - o, nB) / dn; vec3 h = o + d * t;
    vec2 uv = vec2(dot(h - cB, tB) + 0.5, h.y + 0.5);
    if (t > 0.0 && t < best && inside(uv)) { vec4 b = B(uv); col = vec4(b.rgb * (0.45 + 0.55 * -dot(nd, nB)), b.a); }
  }
  outColor = col;
}`,"card-flip":`void main() {
  float th = ease(u_progress) * PI;
  vec2 sp = (v_uv - 0.5) * (1.0 + 0.3 * sin(u_progress * PI));
  float D = 2.5;
  vec3 o = vec3(0.0, 0.0, -D); vec3 d = vec3(sp, D);
  vec3 n = vec3(-sin(th), 0.0, -cos(th)); vec3 t = vec3(cos(th), 0.0, -sin(th));
  float dn = dot(d, n);
  if (abs(dn) < 1e-5) { outColor = vec4(0.0); return; }
  vec3 h = o + d * (dot(-o, n) / dn);
  vec2 uv = vec2(dot(h, t) + 0.5, h.y + 0.5);
  if (!inside(uv)) { outColor = vec4(0.0); return; }
  float shade = 0.5 + 0.5 * abs(dot(normalize(d), n));
  vec4 c = dn < 0.0 ? A(uv) : B(vec2(1.0 - uv.x, uv.y));
  outColor = vec4(c.rgb * shade, c.a);
}`,"page-turn":`void main() {
  float asp = aspect();
  vec2 P = vec2(v_uv.x * asp, v_uv.y);
  vec2 corner = vec2(asp, 0.0);
  vec2 dir = normalize(vec2(-1.0, 0.5));
  float L = max(dot(vec2(0.0, 1.0) - corner, dir), dot(-corner, dir));
  float R = 0.1;
  float f = ease(u_progress) * (L + PI * R + 0.02) - 0.01;
  float x = dot(P - corner, dir);
  vec4 b = B(v_uv);
  if (x > f) {
    float ub = 2.0 * f - PI * R - x;
    vec2 Q = P + dir * (ub - x); vec2 bu = vec2(Q.x / asp, Q.y);
    if (inside(bu)) { vec4 a = A(bu); outColor = vec4(mix(a.rgb, vec3(0.94) * a.a, 0.7), a.a); return; }
    vec4 a = A(v_uv);
    outColor = vec4(a.rgb * (1.0 - 0.25 * exp(-(x - f) * 30.0) * step(0.001, u_progress)), a.a);
    return;
  }
  if (x > f - R) {
    float s1 = asin(clamp((f - x) / R, -1.0, 1.0));
    float u2 = f - R * (PI - s1);
    vec2 Q = P + dir * (u2 - x); vec2 uv2 = vec2(Q.x / asp, Q.y);
    if (inside(uv2)) { vec4 a = A(uv2); outColor = vec4(mix(a.rgb, vec3(0.94) * a.a, 0.7) * (0.75 + 0.25 * sin(s1)), a.a); return; }
    float u1 = f - R * s1;
    Q = P + dir * (u1 - x); vec2 uv1 = vec2(Q.x / asp, Q.y);
    if (inside(uv1)) { vec4 a = A(uv1); outColor = vec4(a.rgb * (0.65 + 0.35 * cos(s1)), a.a); return; }
  }
  float sh = 0.45 * exp(-max(0.0, f - R - x) * 18.0) * step(0.001, u_progress);
  outColor = vec4(b.rgb * (1.0 - sh), b.a);
}`,"swing-door":`void main() {
  float p = ease(u_progress);
  float th = p * 1.45;
  float D = 2.0;
  vec3 o = vec3(0.0, 0.0, -D); vec3 d = vec3(v_uv - 0.5, D);
  vec3 hinge = vec3(-0.5, 0.0, 0.0);
  vec3 t = vec3(cos(th), 0.0, -sin(th)); vec3 n = vec3(-sin(th), 0.0, -cos(th));
  vec4 b = B(v_uv); b.rgb *= 0.6 + 0.4 * p;
  float dn = dot(d, n);
  if (dn < -1e-5) {
    float k = dot(hinge - o, n) / dn; vec3 h = o + d * k;
    vec2 uv = vec2(dot(h - hinge, t), h.y + 0.5);
    if (k > 0.0 && inside(uv)) {
      vec4 a = A(uv) * (1.0 - smoothstep(0.85, 1.0, u_progress));
      outColor = vec4(a.rgb * (0.5 + 0.5 * -dot(normalize(d), n)), a.a) + b * (1.0 - a.a);
      return;
    }
  }
  outColor = b;
}`,"whip-pan":`vec4 pushAt(vec2 uv, float off) { vec2 q = uv + vec2(off, 0.0); return q.x < 1.0 ? Ac(q) : Bc(q - vec2(1.0, 0.0)); }
void main() {
  float off = ease(u_progress); float s = sin(u_progress * PI);
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 16; i++) acc += pushAt(v_uv, off + (float(i) / 15.0 - 0.5) * 0.25 * s);
  outColor = acc / 16.0;
}`,"focus-pull":`void main() {
  float p = u_progress; float s = sin(p * PI);
  vec2 r = vec2(1.0 / aspect(), 1.0) * 0.035 * s;
  float j = hash12(v_uv * u_res) * TAU;
  vec4 a = vec4(0.0); vec4 b = vec4(0.0);
  for (int i = 0; i < 24; i++) {
    float ang = float(i) * 2.39996323 + j; float d = sqrt((float(i) + 0.5) / 24.0);
    vec2 o = vec2(cos(ang), sin(ang)) * d * r;
    a += Ac(v_uv + o); b += Bc(v_uv + o);
  }
  outColor = mix(a, b, smoothstep(0.3, 0.7, p)) / 24.0;
}`,"spin-smear":`void main() {
  float p = ease(u_progress); float s = sin(u_progress * PI);
  vec2 asp = vec2(aspect(), 1.0);
  vec2 q = (v_uv - 0.5) * asp * (1.0 - 0.35 * s);
  float base = u_progress < 0.5 ? p * PI : (p - 1.0) * PI;
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 16; i++) {
    vec2 r = rot(base + (float(i) / 15.0 - 0.5) * 0.6 * s) * q / asp + 0.5;
    acc += u_progress < 0.5 ? Ac(r) : Bc(r);
  }
  outColor = acc / 16.0;
}`},Re=`
uniform sampler2D u_person;
uniform vec4 u_personRect;   // source uv rectangle shown in the buffer (crop)
uniform vec2 u_personFlip;   // 1 where the clip is mirrored
uniform vec2 u_personTexel;  // one matte pixel, in buffer uv
float personAt(vec2 uv) {
  vec2 q = vec2(u_personFlip.x > 0.5 ? 1.0 - uv.x : uv.x, u_personFlip.y > 0.5 ? 1.0 - uv.y : uv.y);
  q = u_personRect.xy + q * u_personRect.zw;
  if (!inside(q)) return 0.0;
  return smoothstep(0.3, 0.7, texture(u_person, q).a);
}
// Offset of length r (fraction of the height) in direction a, in uv.
vec2 hOff(float a, float r) { return vec2(cos(a) / aspect(), sin(a)) * r; }
// The person grown outward by r: most of the matte found within r.
float personGrow(vec2 uv, float r) {
  float m = personAt(uv);
  for (int i = 0; i < 16; i++) {
    float a = float(i) * 0.39269908;
    m = max(m, personAt(uv + hOff(a, r)));
    m = max(m, personAt(uv + hOff(a + 0.19634954, r * 0.55)));
  }
  return m;
}
// Soft average of the matte over a disc of radius r (rotated per pixel so
// few taps leave grain rather than streaks).
float personSoft(vec2 uv, float r) {
  float s = 0.0;
  float j = hash12(uv * u_res) * TAU;
  for (int i = 0; i < 24; i++) {
    float a = float(i) * 2.39996323 + j;
    float d = sqrt((float(i) + 0.5) / 24.0);
    s += personAt(uv + hOff(a, r * d));
  }
  return s / 24.0;
}
// The matte with its edge moved onto the picture's own edges: nearby matte
// samples count more where the picture looks like this pixel.
float personEdgeIn(vec2 uv, float lo, float hi) {
  vec3 c0 = unpre(src(uv));
  float acc = 0.0;
  float wsum = 0.0;
  for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
    vec2 o = vec2(float(i), float(j));
    vec2 q = uv + o * u_personTexel;
    vec3 d = unpre(src(q)) - c0;
    float w = exp(-dot(o, o) * 0.22 - dot(d, d) * 28.0);
    acc += personAt(q) * w;
    wsum += w;
  }
  return smoothstep(lo, hi, acc / max(wsum, 1e-5));
}
float personEdge(vec2 uv) { return personEdgeIn(uv, 0.35, 0.65); }
// Smooth glow of the person out to about r: soft discs of three sizes. A
// lower reach makes it brighter further out.
float personGlow(vec2 uv, float r, float reach) {
  float s = personSoft(uv, r * 0.3) + personSoft(uv, r * 0.6) + personSoft(uv, r);
  return smoothstep(0.0, reach, s / 3.0);
}
`,E=e=>Re+e,ze={"body-outline":E(`uniform float u_size; uniform vec3 u_color;
  void main() {
    vec4 c = src(v_uv);
    float m = personEdge(v_uv);
    float ring = clamp(personGrow(v_uv, 0.003 + u_size * 0.03) - m, 0.0, 1.0);
    outColor = over(c, u_color, ring * u_strength);
  }`),"body-aura":E(`uniform float u_size; uniform vec3 u_color;
  void main() {
    vec4 c = src(v_uv);
    float m = personEdge(v_uv);
    float r = 0.02 + u_size * 0.14;
    float g = personGlow(v_uv, r, 0.3);
    float pulse = 0.75 + 0.25 * sin(u_time * (0.5 + u_speed * 6.0));
    float a = g * (1.0 - m) * u_strength * pulse;
    // Light added over the picture, and a colored halo where it is see-through.
    outColor = vec4(c.rgb + u_color * a * (1.0 - 0.4 * c.a), max(c.a, a));
  }`),"body-neon":E(`uniform float u_size; uniform float u_dim;
  void main() {
    vec4 c = src(v_uv);
    float r = 0.002 + u_size * 0.012;
    float edge = clamp(personGrow(v_uv, r) - personAt(v_uv) + (personAt(v_uv) - personSoft(v_uv, r)) * 2.0, 0.0, 1.0);
    float halo = clamp(personGrow(v_uv, r * 4.0) - personAt(v_uv), 0.0, 1.0) * 0.35;
    vec3 col = hue2rgb(fract(v_uv.y * 0.6 + u_time * u_speed * 0.4));
    vec3 base = c.rgb * (1.0 - u_dim * 0.85);
    float a = (edge + halo) * u_strength;
    outColor = vec4(base + col * a, max(c.a, a));
  }`),"body-bg-blur":E(`void main() {
    vec4 c = src(v_uv);
    float m = personEdge(v_uv);
    vec4 b = discBlur(v_uv, vec2(1.0 / aspect(), 1.0) * u_strength * 0.09);
    outColor = mix(b, c, m);
  }`),"body-color-spot":E(`void main() {
    vec4 c = src(v_uv);
    float m = personEdge(v_uv);
    vec4 g = vec4(vec3(luma(c.rgb)), c.a);
    outColor = mix(c, g, (1.0 - m) * u_strength);
  }`),"body-spotlight":E(`uniform float u_size;
  void main() {
    vec4 c = src(v_uv);
    float light = max(personGlow(v_uv, 0.05 + u_size * 0.35, 0.55), personEdge(v_uv));
    float k = 1.0 - u_strength * 0.9 * (1.0 - light);
    outColor = vec4(c.rgb * k, c.a);
  }`),"body-shadow":E(`uniform float u_angle; uniform float u_size; uniform float u_soft; uniform vec3 u_color;
  void main() {
    vec4 c = src(v_uv);
    // Direction the shadow falls on screen: 0 right, 90 down.
    float a = radians(-u_angle);
    vec2 off = hOff(a, u_size * 0.12);
    float sh = personSoft(v_uv - off, 0.004 + u_soft * 0.05);
    float m = personEdge(v_uv);
    float k = sh * (1.0 - m) * u_strength;
    // Darkens what is under it; shows as a shadow where the clip is see-through.
    outColor = vec4(mix(c.rgb, u_color * c.a, k), max(c.a, k));
  }`),"body-clones":E(`uniform float u_size;
  void main() {
    vec4 c = src(v_uv);
    vec4 outc = c;
    float sway = sin(u_time * (0.5 + u_speed * 4.0)) * u_speed * 0.15;
    for (int k = 3; k >= 1; k--) {
      float d = float(k) * (0.08 + u_size * 0.22) * (1.0 + sway);
      float fade = u_strength * (1.0 - float(k) * 0.24);
      for (int side = -1; side <= 1; side += 2) {
        vec2 q = v_uv + vec2(float(side) * d / aspect(), 0.0);
        float pm = personAt(q) * fade;
        outc = outc * (1.0 - pm) + src(q) * pm;
      }
    }
    outColor = mix(outc, c, personEdge(v_uv));
  }`),"body-silhouette":E(`uniform vec3 u_color;
  void main() {
    vec4 c = src(v_uv);
    // A solid fill reads best a little generous at the edge.
    float m = personEdgeIn(v_uv, 0.12, 0.4) * u_strength;
    outColor = mix(c, vec4(u_color, 1.0) * max(c.a, m), m);
  }`),"body-mosaic":E(`uniform float u_size;
  void main() {
    vec4 c = src(v_uv);
    float m = personGrow(v_uv, 0.01);
    float cells = mix(60.0, 8.0, u_size);
    vec2 n = vec2(cells * aspect(), cells);
    vec4 p = src((floor(v_uv * n) + 0.5) / n);
    outColor = mix(c, p, m * u_strength);
  }`)},Be=`#version 300 es
in vec2 a_pos;
uniform mat3 u_matrix;   // unit quad (-0.5..0.5) to clip space
uniform vec4 u_uvRect;   // x, y, w, h of the sampled region
uniform vec2 u_flip;
out vec2 v_uv;
out vec2 v_quad;
void main() {
  vec3 p = u_matrix * vec3(a_pos, 1.0);
  gl_Position = vec4(p.xy, 0.0, 1.0);
  vec2 q = a_pos + 0.5;
  v_quad = q;
  q = mix(q, 1.0 - q, u_flip);
  v_uv = u_uvRect.xy + q * u_uvRect.zw;
}`,D=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos + 0.5;
  gl_Position = vec4(a_pos * 2.0, 0.0, 1.0);
}`,Ve=`
uniform float u_brightness, u_contrast, u_saturation, u_exposure, u_temperature, u_tint;
uniform float u_highlights, u_shadows, u_fade, u_vignette, u_grain, u_sharpen, u_mono;
uniform float u_vibrance, u_whites, u_blacks, u_brilliance, u_clarity;
uniform vec3 u_shadowTint, u_highlightTint;
uniform float u_splitAmount, u_time;
uniform int u_hslOn;
uniform vec3 u_hsl[8];          // per hue range: hue shift (degrees), saturation, value
uniform int u_wheelsOn;
uniform vec3 u_lift, u_gamma, u_gain, u_offset;
uniform int u_curvesOn;
uniform sampler2D u_curves;     // 256 x 1: master, red, green, blue lookups
uniform int u_lutOn;
uniform mediump sampler3D u_lut;
uniform float u_lutSize, u_lutMix;
uniform vec3 u_lutMin, u_lutMax;
float g_local = -1.0;           // neighborhood luma for clarity, set by main()
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 toHsv(vec3 c) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float d = mx - mn;
  float h = 0.0;
  if (d > 1e-5) {
    if (mx == c.r) h = mod((c.g - c.b) / d, 6.0);
    else if (mx == c.g) h = (c.b - c.r) / d + 2.0;
    else h = (c.r - c.g) / d + 4.0;
  }
  return vec3(h / 6.0, mx > 0.0 ? d / mx : 0.0, mx);
}
vec3 fromHsv(vec3 c) {
  vec3 k = mod(vec3(5.0, 3.0, 1.0) + c.x * 6.0, 6.0);
  return c.z - c.z * c.y * clamp(min(k, 4.0 - k), 0.0, 1.0);
}
const float HUE_AT[9] = float[9](0.0, 30.0, 60.0, 120.0, 180.0, 220.0, 270.0, 310.0, 360.0);
vec3 hslRanges(vec3 c) {
  vec3 hsv = toHsv(clamp(c, 0.0, 1.0));
  float h = hsv.x * 360.0;
  vec3 adj = vec3(0.0);
  // Neighboring ranges blend smoothly: full strength at a range's center, none at the next center.
  for (int i = 0; i < 8; i++) {
    if (h <= HUE_AT[i + 1]) {
      float t = (h - HUE_AT[i]) / (HUE_AT[i + 1] - HUE_AT[i]);
      t = t * t * (3.0 - 2.0 * t);
      adj = mix(u_hsl[i], u_hsl[(i + 1) % 8], t);
      break;
    }
  }
  float w = smoothstep(0.02, 0.2, hsv.y); // greys stay put
  hsv.x = fract(hsv.x + adj.x * w / 360.0 + 1.0);
  hsv.y = clamp(hsv.y * (1.0 + adj.y * w), 0.0, 1.0);
  hsv.z = max(0.0, hsv.z * (1.0 + adj.z * w));
  return fromHsv(hsv);
}
vec4 curveTap(float x) { return texture(u_curves, vec2(clamp(x, 0.0, 1.0) * 0.99609375 + 0.001953125, 0.5)); }
vec3 curves(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  float l = luma(c);
  c = clamp(c + (curveTap(l).r - l), 0.0, 1.0);
  return vec3(curveTap(c.r).g, curveTap(c.g).b, curveTap(c.b).a);
}
vec3 wheels(vec3 c) {
  c += u_lift * (1.0 - clamp(c, 0.0, 1.0));
  c *= 1.0 + u_gain;
  c = pow(max(c, 0.0), 1.0 / max(1.0 + u_gamma, vec3(0.05)));
  return c + u_offset;
}
vec3 lookup(vec3 c) {
  vec3 x = clamp((c - u_lutMin) / (u_lutMax - u_lutMin), 0.0, 1.0);
  vec3 uvw = x * ((u_lutSize - 1.0) / u_lutSize) + 0.5 / u_lutSize;
  return mix(c, texture(u_lut, uvw).rgb, u_lutMix);
}
vec3 grade(vec3 c, vec2 uv, vec2 px) {
  if (u_clarity != 0.0 && g_local >= 0.0) {
    float l0 = clamp(luma(c), 0.0, 1.0);
    c += (l0 - g_local) * u_clarity * 0.012 * (0.35 + 0.65 * (1.0 - abs(l0 * 2.0 - 1.0)));
  }
  c *= exp2(u_exposure * 0.015);
  c += u_brightness * 0.0025;
  c = (c - 0.5) * (1.0 + u_contrast * 0.01) + 0.5;
  float l = luma(c);
  c += u_shadows * 0.003 * (1.0 - smoothstep(0.0, 0.55, l));
  c += u_highlights * 0.003 * smoothstep(0.45, 1.0, l);
  if (u_whites != 0.0 || u_blacks != 0.0) {
    l = luma(c);
    c += u_whites * 0.0035 * smoothstep(0.5, 1.05, l);
    c += u_blacks * 0.003 * (1.0 - smoothstep(-0.05, 0.4, l));
  }
  if (u_brilliance != 0.0) {
    l = clamp(luma(c), 0.0, 1.0);
    float b = u_brilliance * 0.01;
    c += b * (0.28 * smoothstep(0.0, 0.45, l) * (1.0 - l) - 0.12 * smoothstep(0.65, 1.0, l));
    c = mix(vec3(luma(c)), c, 1.0 + b * 0.12);
  }
  c.r += u_temperature * 0.0011; c.b -= u_temperature * 0.0011;
  c.g -= u_tint * 0.0009; c.r += u_tint * 0.0003; c.b += u_tint * 0.0003;
  if (u_wheelsOn == 1) c = wheels(c);
  if (u_hslOn == 1) c = hslRanges(c);
  l = luma(c);
  c = mix(vec3(l), c, max(0.0, 1.0 + u_saturation * 0.01));
  if (u_vibrance != 0.0) {
    float s = clamp(max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b)), 0.0, 1.0);
    c = mix(vec3(l), c, max(0.0, 1.0 + u_vibrance * 0.012 * (1.0 - s)));
  }
  if (u_curvesOn == 1) c = curves(c);
  if (u_lutOn == 1) c = lookup(c);
  if (u_curvesOn == 1 || u_lutOn == 1) l = luma(c);
  c = mix(c, vec3(l), u_mono);
  if (u_splitAmount > 0.0) {
    l = clamp(luma(c), 0.0, 1.0);
    vec3 sh = mix(c, u_shadowTint * (l * 2.0 + 0.2), (1.0 - l) * u_splitAmount);
    c = mix(sh, mix(sh, u_highlightTint * (l + 0.15), l * u_splitAmount), l);
  }
  c = mix(c, c * 0.82 + 0.13, clamp(u_fade * 0.01, -1.0, 1.0));
  if (u_vignette != 0.0) {
    float d = distance(uv, vec2(0.5));
    c *= 1.0 - u_vignette * 0.01 * smoothstep(0.25, 0.85, d) * 0.9;
  }
  if (u_grain > 0.0) c += (hash12(uv / px + fract(u_time) * 97.0) - 0.5) * u_grain * 0.0025;
  return clamp(c, 0.0, 1.0);
}
`,He=e=>`
float localLuma(vec2 uv) {
  vec2 r = vec2(0.012, 0.012 * u_texel.y / u_texel.x);
  float s = 0.0;
  for (int i = 0; i < 12; i++) {
    float a = float(i) * 1.0472 + (i < 6 ? 0.0 : 0.5236);
    s += luma(${e}(uv + vec2(cos(a), sin(a)) * r * (i < 6 ? 0.5 : 1.0)));
  }
  return s / 12.0;
}`,Ue=`#version 300 es
precision highp float;
in vec2 v_uv;
in vec2 v_quad;
uniform sampler2D u_tex;
uniform float u_opacity;
uniform vec2 u_texel;
uniform float u_blur;
uniform int u_chroma;
uniform vec3 u_keyColor;
uniform float u_keyStrength, u_keySpill;
uniform int u_maskOn;        // clip masks, rasterized to a coverage texture (engine/mask-raster.js)
uniform sampler2D u_maskTex;
uniform int u_matteOn;       // person matte (engine/cutout.js): 1 = bound, 2 = not ready yet
uniform int u_cutOn;         // background removal keeps only the person
uniform sampler2D u_matteTex;
uniform int u_maskColor;     // 1: the clip's masks limit its color instead of cutting it
uniform int u_colorTarget;   // color only on: 0 everything, 1 the person, 2 the background
uniform int u_retouchOn;     // skin retouch (model/retouch.js)
uniform vec4 u_retouch;      // smooth, even, brighten, sharpen (0..1)
uniform vec2 u_matteTexel;
uniform vec2 u_matteWin;
uniform int u_premultiplied;
uniform vec2 u_srcSize;      // source size in pixels (face tools work in source pixels, y down)
uniform int u_warpFaces;     // face shape (engine/face-render.js): faces with warp handles, 0 = off
uniform highp sampler2D u_warpTex; // handles, one column each: (center, move), shape matrix, (scale)
uniform vec4 u_warpFace[3];  // per face: center, reach, first handle
uniform vec3 u_warpEnd;      // per face: one past its last handle
uniform int u_faceFixOn;     // skin fixes placed by face landmarks
uniform sampler2D u_faceMask; // R spot-free skin, G under the eyes, B lips, A inside the mouth
uniform vec4 u_faceMaskRect; // where the masks sit in source pixels
uniform vec4 u_faceFix;      // blemishes, dark circles, teeth, lips (0..1)
uniform vec3 u_lipColor;
uniform float u_spotR;       // spot search radius in source pixels
uniform int u_hairOn;        // hair color
uniform sampler2D u_hairTex; // hair matte (R) of the square u_hairRect (source pixels), rows top first
uniform vec4 u_hairRect;
uniform vec2 u_hairTexel;
uniform vec3 u_hairColor;
uniform float u_hairAmount, u_hairLuma;
out vec4 outColor;
${Ve}
vec4 tap(vec2 uv) {
  vec4 s = texture(u_tex, uv);
  if (u_premultiplied == 1 && s.a > 0.0) s.rgb /= s.a;
  return s;
}
vec3 tapRgb(vec2 uv) { return tap(uv).rgb; }
${He(`tapRgb`)}
vec2 rgb2uv(vec3 c) { return vec2(-0.169 * c.r - 0.331 * c.g + 0.5 * c.b, 0.5 * c.r - 0.419 * c.g - 0.081 * c.b); }
// Masks are drawn on the picture, so they are sampled at the source uv (crop and flip included).
float maskAlpha(vec2 uv) {
  if (u_maskOn == 0) return 1.0;
  return texture(u_maskTex, uv).a;
}
// The matte is coarse, so each pixel takes it from nearby matte samples that
// look like it in the full picture (joint bilateral upsampling): edges snap
// to hair and shoulders instead of the matte's own blocky outline.
float matteRefined(vec2 uv, vec3 rgb) {
  float acc = 0.0;
  float wsum = 0.0;
  for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
    vec2 o = vec2(float(i), float(j));
    vec2 q = uv + o * u_matteTexel;
    vec3 d = tap(q).rgb - rgb;
    float w = exp(-dot(o, o) * 0.22 - dot(d, d) * 28.0);
    acc += texture(u_matteTex, q).a * w;
    wsum += w;
  }
  return smoothstep(u_matteWin.x, u_matteWin.y, acc / max(wsum, 1e-5));
}
float matteAlpha(vec2 uv, vec3 rgb) {
  if (u_cutOn == 0 || u_matteOn == 0) return 1.0;
  if (u_matteOn == 2) return 0.0;
  return matteRefined(uv, rgb);
}
// Where the clip's color applies (masks in color mode, person or background).
float colorRegion(vec2 uv, vec3 rgb, float mask) {
  float r = u_maskColor == 1 ? mask : 1.0;
  if (u_colorTarget > 0) {
    // Until the person is found nothing is graded, rather than everything.
    float p = u_matteOn == 1 ? matteRefined(uv, rgb) : -1.0;
    r *= p < 0.0 ? 0.0 : u_colorTarget == 1 ? p : 1.0 - p;
  }
  return r;
}
// Soft skin-tone membership from chroma (YCbCr), fading out in deep shadow.
float skinW(vec3 c) {
  float cb = 0.5 - 0.168736 * c.r - 0.331264 * c.g + 0.5 * c.b;
  float cr = 0.5 + 0.5 * c.r - 0.418688 * c.g - 0.081312 * c.b;
  float y = dot(c, vec3(0.299, 0.587, 0.114));
  return smoothstep(0.26, 0.31, cb) * (1.0 - smoothstep(0.49, 0.54, cb))
       * smoothstep(0.515, 0.55, cr) * (1.0 - smoothstep(0.67, 0.71, cr))
       * smoothstep(0.08, 0.2, y);
}
// Skin retouch in source space: an edge-preserving average of nearby skin
// (smooth), a wide average of its color (even), a lift (brighten), and an
// unsharp mask on everything that is not skin (sharpen).
vec3 retouch(vec2 uv, vec3 c) {
  float person = u_matteOn == 1 ? smoothstep(0.25, 0.6, texture(u_matteTex, uv).a) : u_matteOn == 2 ? 0.0 : 1.0;
  float w0 = skinW(c) * person;
  vec2 st = u_texel * (1.0 + 2.5 * u_retouch.x) * max(1.0, 0.75 / (u_texel.y * 1080.0));
  vec3 acc = vec3(0.0);
  float wa = 0.0;
  vec3 wide = vec3(0.0);
  float ww = 0.0;
  vec3 near = vec3(0.0);
  for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
    vec2 o = vec2(float(i), float(j));
    vec3 s = tap(uv + o * st).rgb;
    vec3 d = s - c;
    float sk = skinW(s);
    float w = exp(-dot(o, o) * 0.18 - dot(d, d) * 90.0) * sk;
    acc += s * w;
    wa += w;
    wide += s * sk;
    ww += sk;
    near += s;
  }
  vec3 outc = c;
  if (w0 > 0.0) {
    vec3 sm = wa > 1e-4 ? acc / wa : c;
    outc = mix(outc, sm, clamp(u_retouch.x * 1.15, 0.0, 1.0) * w0);
    if (ww > 1e-4 && u_retouch.y > 0.0) {
      vec3 avg = wide / ww;
      float l = luma(outc);
      vec3 chroma = mix(outc - l, avg - luma(avg), u_retouch.y * 0.7 * w0);
      outc = l + chroma;
    }
    float l = luma(outc);
    outc *= 1.0 + u_retouch.z * 0.35 * w0 * (1.0 - l);
  }
  if (u_retouch.w > 0.0) {
    vec3 blur = near / 25.0;
    outc += (c - blur) * u_retouch.w * 1.6 * (1.0 - w0) * person;
  }
  return clamp(outc, 0.0, 1.0);
}
// Source pixel (y down) of a source uv, and back.
vec2 srcPx(vec2 uv) { return vec2(uv.x, 1.0 - uv.y) * u_srcSize; }
vec2 pxUv(vec2 p) { vec2 q = p / u_srcSize; return vec2(q.x, 1.0 - q.y); }
// Face shape: each handle moves the picture inside its ellipse and scales it
// around its center, fading smoothly to nothing at the edge, so everything
// away from the faces stays put. Mirrors warpOffset in face-geometry.js.
vec2 warpUv(vec2 uv) {
  vec2 p = srcPx(uv);
  vec2 off = vec2(0.0);
  for (int f = 0; f < 3; f++) {
    if (f >= u_warpFaces) break;
    vec4 g = u_warpFace[f];
    vec2 dg = p - g.xy;
    if (dot(dg, dg) >= g.z * g.z) continue;
    int last = int(u_warpEnd[f] + 0.5);
    for (int i = int(g.w + 0.5); i < last; i++) {
      vec4 a = texelFetch(u_warpTex, ivec2(i, 0), 0);
      vec4 m = texelFetch(u_warpTex, ivec2(i, 1), 0);
      vec2 r = p - a.xy;
      vec2 q = vec2(dot(m.xy, r), dot(m.zw, r));
      float r2 = dot(q, q);
      if (r2 >= 1.0) continue;
      float w = (1.0 - r2) * (1.0 - r2);
      float s = texelFetch(u_warpTex, ivec2(i, 2), 0).x;
      off += (a.zw + r * s) * w;
    }
  }
  return pxUv(p - off);
}
vec4 faceMaskAt(vec2 uv) {
  vec2 m = (srcPx(uv) - u_faceMaskRect.xy) / u_faceMaskRect.zw;
  if (m.x <= 0.0 || m.y <= 0.0 || m.x >= 1.0 || m.y >= 1.0) return vec4(0.0);
  return texture(u_faceMask, m);
}
// Red spots count as darker, so the test below finds them too.
float spotV(vec3 s) { return luma(s) - 0.5 * max(s.r - s.g - 0.1, 0.0); }
// Blemishes: a pixel darker than every sample on a ring around it is part of
// a small spot (edges, shadows and lines reach the ring and are left alone);
// it takes the ring's average color. Two ring sizes catch larger spots.
// Mirrors spotStrength in face-geometry.js.
vec3 clearSpots(vec2 uv, vec3 c, float amt) {
  float v = spotV(c);
  vec3 fill = c;
  float best = 0.0;
  for (int sc = 1; sc <= 2; sc++) {
    vec2 r = vec2(u_spotR * float(sc)) / u_srcSize;
    vec3 avg = vec3(0.0);
    float mn = 9.0;
    for (int k = 0; k < 10; k++) {
      float a = float(k) * 0.6283185 + float(sc) * 0.3;
      vec3 s = tap(uv + vec2(cos(a), sin(a)) * r).rgb;
      avg += s;
      mn = min(mn, spotV(s));
    }
    float w = smoothstep(0.012, 0.045, mn - v);
    if (w > best) {
      best = w;
      fill = avg / 10.0;
    }
  }
  return mix(c, fill, best * amt * skinW(fill));
}
// Skin fixes in the regions drawn from the face landmarks.
vec3 faceFix(vec2 uv, vec3 c) {
  vec4 m = faceMaskAt(uv);
  if (m.r + m.g + m.b + m.a <= 0.0) return c;
  if (u_faceFix.x > 0.0 && m.r > 0.0) c = clearSpots(uv, c, u_faceFix.x * m.r);
  if (u_faceFix.y > 0.0 && m.g > 0.0) {
    // Dark circles: lift the shadow (more where darker) and take out some of its blue.
    float k = u_faceFix.y * m.g;
    c = pow(c, vec3(1.0 - 0.42 * k));
    c *= vec3(1.0 + 0.03 * k, 1.0 + 0.01 * k, 1.0 - 0.06 * k);
  }
  if (u_faceFix.z > 0.0 && m.a > 0.0) {
    // Teeth: bright, not red (lips, gums and tongue are) inside the mouth.
    float l = luma(c);
    float red = c.r - 0.5 * (c.g + c.b);
    float k = u_faceFix.z * m.a * smoothstep(0.16, 0.38, l) * (1.0 - smoothstep(0.07, 0.17, red));
    float yellow = max(0.5 * (c.r + c.g) - c.b, 0.0);
    c = mix(c, vec3(l), k * clamp(0.35 + yellow * 4.0, 0.0, 0.85));
    c += (1.0 - c) * 0.22 * k;
  }
  if (u_faceFix.w > 0.0 && m.b > 0.0) {
    // Lips: the chosen color, keeping most of the lips' own light and shade.
    float l = luma(c);
    float tl = max(luma(u_lipColor), 0.04);
    vec3 tint = clamp(u_lipColor * (l / tl), 0.0, 1.0);
    c = mix(c, tint, u_faceFix.w * m.b * 0.7);
  }
  return clamp(c, 0.0, 1.0);
}
// Hair matte refined against the full picture, like matteRefined. h is the
// position in the matte's square; one matte texel is st in source uv.
float hairAt(vec2 uv, vec2 h, vec3 rgb) {
  vec2 st = u_hairRect.zw * u_hairTexel / u_srcSize * vec2(1.0, -1.0);
  float acc = 0.0;
  float wsum = 0.0;
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) {
    vec2 o = vec2(float(i), float(j));
    vec3 d = tap(uv + o * st).rgb - rgb;
    float w = exp(-dot(o, o) * 0.4 - dot(d, d) * 40.0);
    acc += texture(u_hairTex, h + o * u_hairTexel).r * w;
    wsum += w;
  }
  return smoothstep(0.35, 0.85, acc / max(wsum, 1e-5));
}
// Hair color: the chosen color scaled by how light each pixel is next to the
// hair's mean, so strands, shine and shadow survive the change. Scaling
// would flatten dark colors, so those keep the detail as differences.
vec3 hairRecolor(vec2 uv, vec3 c) {
  vec2 hp = (srcPx(uv) - u_hairRect.xy) / u_hairRect.zw;
  if (hp.x <= 0.0 || hp.y <= 0.0 || hp.x >= 1.0 || hp.y >= 1.0) return c;
  if (texture(u_hairTex, hp).r < 0.02) return c;
  float h = hairAt(uv, hp, c);
  if (h <= 0.0) return c;
  float l = luma(c);
  float rel = pow(l / max(u_hairLuma, 0.03), 0.85);
  vec3 scaled = u_hairColor * rel;
  float over = max(max(scaled.r, max(scaled.g, scaled.b)) - 1.0, 0.0);
  scaled += over * 0.6;
  vec3 shifted = u_hairColor + (l - u_hairLuma) * 0.7;
  vec3 tgt = clamp(mix(shifted, scaled, smoothstep(0.06, 0.3, luma(u_hairColor))), 0.0, 1.0);
  return mix(c, tgt, u_hairAmount * h);
}
void main() {
  vec2 uv = u_warpFaces > 0 ? warpUv(v_uv) : v_uv;
  vec4 c;
  if (u_blur > 0.0) {
    c = vec4(0.0);
    float r = u_blur;
    for (int i = -3; i <= 3; i++) for (int j = -3; j <= 3; j++) {
      c += tap(uv + vec2(float(i), float(j)) * u_texel * r);
    }
    c /= 49.0;
  } else {
    c = tap(uv);
  }
  if (u_sharpen > 0.0) {
    vec4 n = tap(uv + vec2(u_texel.x, 0.0)) + tap(uv - vec2(u_texel.x, 0.0)) + tap(uv + vec2(0.0, u_texel.y)) + tap(uv - vec2(0.0, u_texel.y));
    c.rgb = c.rgb + (c.rgb - n.rgb * 0.25) * u_sharpen * 0.012;
  }
  if (u_chroma == 1) {
    float d = distance(rgb2uv(c.rgb), rgb2uv(u_keyColor));
    float edge = u_keyStrength * 0.004;
    float k = smoothstep(edge, edge + 0.06, d);
    c.a *= k;
    // Remove key color spill on the remaining edge.
    float spill = (1.0 - k) * u_keySpill * 0.01;
    c.rgb = mix(c.rgb, vec3(luma(c.rgb)), spill);
  }
  if (u_retouchOn == 1) c.rgb = retouch(uv, c.rgb);
  if (u_faceFixOn == 1) c.rgb = faceFix(uv, c.rgb);
  if (u_hairOn == 1) c.rgb = hairRecolor(uv, c.rgb);
  float cut = matteAlpha(uv, c.rgb);
  float mk = maskAlpha(v_uv);
  float region = colorRegion(uv, c.rgb, mk);
  vec3 before = c.rgb;
  if (u_clarity != 0.0) g_local = localLuma(uv);
  c.rgb = mix(before, grade(c.rgb, v_quad, u_texel), region);
  float a = c.a * u_opacity * (u_maskColor == 1 ? 1.0 : mk) * cut;
  outColor = vec4(c.rgb * a, a);
}`,We=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_tex;
uniform float u_opacity;
out vec4 outColor;
void main() { outColor = texture(u_tex, v_uv) * u_opacity; }`,Ge=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_dir;
out vec4 outColor;
void main() {
  vec4 c = texture(u_tex, v_uv) * 0.2270270270;
  c += texture(u_tex, v_uv + u_dir * 1.3846153846) * 0.3162162162;
  c += texture(u_tex, v_uv - u_dir * 1.3846153846) * 0.3162162162;
  c += texture(u_tex, v_uv + u_dir * 3.2307692308) * 0.0702702703;
  c += texture(u_tex, v_uv - u_dir * 3.2307692308) * 0.0702702703;
  outColor = c;
}`,Ke=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_texel;
uniform float u_mix;
out vec4 outColor;
${Ve}
vec3 srcRgb(vec2 uv) { vec4 s = texture(u_tex, uv); return s.a > 0.0 ? s.rgb / s.a : s.rgb; }
${He(`srcRgb`)}
void main() {
  vec4 s = texture(u_tex, v_uv);
  vec3 c = s.a > 0.0 ? s.rgb / s.a : s.rgb;
  if (u_clarity != 0.0) g_local = localLuma(v_uv);
  if (u_sharpen > 0.0) {
    vec3 n = texture(u_tex, v_uv + vec2(u_texel.x, 0.0)).rgb + texture(u_tex, v_uv - vec2(u_texel.x, 0.0)).rgb + texture(u_tex, v_uv + vec2(0.0, u_texel.y)).rgb + texture(u_tex, v_uv - vec2(0.0, u_texel.y)).rgb;
    c = c + (c - n * 0.25) * u_sharpen * 0.012;
  }
  vec3 g = grade(c, v_uv, u_texel);
  outColor = vec4(mix(c, g, u_mix) * s.a, s.a);
}`,qe=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_dst;
uniform sampler2D u_src;
uniform int u_mode;
out vec4 outColor;
vec3 blendFn(vec3 b, vec3 s) {
  if (u_mode == 1) return b * s;
  if (u_mode == 2) return b + s - b * s;
  if (u_mode == 3) return mix(2.0 * b * s, 1.0 - 2.0 * (1.0 - b) * (1.0 - s), step(0.5, b));
  if (u_mode == 4) return min(b, s);
  if (u_mode == 5) return max(b, s);
  if (u_mode == 6) return min(vec3(1.0), b / max(1.0 - s, 1e-4));
  if (u_mode == 7) return 1.0 - min(vec3(1.0), (1.0 - b) / max(s, 1e-4));
  if (u_mode == 8) return mix(b - (1.0 - 2.0 * s) * b * (1.0 - b), b + (2.0 * s - 1.0) * (sqrt(b) - b), step(0.5, s));
  if (u_mode == 9) return mix(2.0 * b * s, 1.0 - 2.0 * (1.0 - b) * (1.0 - s), step(0.5, s));
  if (u_mode == 10) return abs(b - s);
  if (u_mode == 11) return min(vec3(1.0), b + s);
  return s;
}
void main() {
  vec4 d = texture(u_dst, v_uv);
  vec4 s = texture(u_src, v_uv);
  vec3 b = d.a > 0.0 ? d.rgb / d.a : vec3(0.0);
  vec3 sc = s.a > 0.0 ? s.rgb / s.a : vec3(0.0);
  vec3 mixed = mix(sc, blendFn(b, sc), d.a);
  float a = s.a + d.a * (1.0 - s.a);
  outColor = vec4(mixed * s.a + d.rgb * (1.0 - s.a), a);
}`,Je={normal:0,multiply:1,screen:2,overlay:3,darken:4,lighten:5,"color-dodge":6,"color-burn":7,"soft-light":8,"hard-light":9,difference:10,add:11},Ye=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_texel;
uniform vec2 u_res;
uniform float u_time;      // seconds since the effect clip started
uniform float u_speed;     // 0..1
uniform float u_strength;  // 0..1
out vec4 outColor;
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec4 src(vec2 uv) { return texture(u_tex, uv); }
float rate() { return 0.25 + u_speed * 3.0; }
`,Xe={blur:`void main() {
    vec4 c = vec4(0.0); float r = 1.0 + u_strength * 10.0; float n = 0.0;
    for (int i = -4; i <= 4; i++) for (int j = -4; j <= 4; j++) { float w = exp(-float(i*i + j*j) / 18.0); c += src(v_uv + vec2(i, j) * u_texel * r) * w; n += w; }
    outColor = c / n; }`,vignette:`void main() { vec4 c = src(v_uv); float d = distance(v_uv, vec2(0.5)); c.rgb *= 1.0 - smoothstep(0.2, 0.8, d) * u_strength; outColor = c; }`,"black-white":`void main() { vec4 c = src(v_uv); c.rgb = mix(c.rgb, vec3(luma(c.rgb / max(c.a, 1e-4)) * c.a), u_strength * 0.5 + 0.5); outColor = c; }`,invert:`void main() { vec4 c = src(v_uv); vec3 inv = c.a - c.rgb; c.rgb = mix(c.rgb, inv, 0.5 + 0.5 * u_strength); outColor = c; }`,sharpen:`void main() { vec4 c = src(v_uv); vec4 n = src(v_uv + vec2(u_texel.x, 0.0)) + src(v_uv - vec2(u_texel.x, 0.0)) + src(v_uv + vec2(0.0, u_texel.y)) + src(v_uv - vec2(0.0, u_texel.y)); c.rgb += (c.rgb - n.rgb * 0.25) * (0.5 + u_strength * 2.5); outColor = clamp(c, 0.0, 1.0); }`,"zoom-pulse":`void main() { float p = 0.5 - 0.5 * cos(u_time * rate() * 6.2831); float z = 1.0 + p * (0.05 + u_strength * 0.2); outColor = src((v_uv - 0.5) / z + 0.5); }`,shake:`void main() { float t = floor(u_time * (8.0 + u_speed * 24.0)); vec2 o = (vec2(hash11(t), hash11(t + 7.1)) - 0.5) * (0.01 + u_strength * 0.05); float z = 1.0 + (0.01 + u_strength * 0.05) * 2.0; outColor = src((v_uv - 0.5) / z + 0.5 + o); }`,"spin-blur":`void main() { vec2 c = v_uv - 0.5; vec4 acc = vec4(0.0); float a = u_strength * 0.12 * (0.5 + 0.5 * sin(u_time * rate() * 3.0)); for (int i = 0; i < 12; i++) { float t = (float(i) / 11.0 - 0.5) * a; mat2 m = mat2(cos(t), -sin(t), sin(t), cos(t)); acc += src(m * c + 0.5); } outColor = acc / 12.0; }`,"zoom-blur":`void main() { vec2 c = v_uv - 0.5; vec4 acc = vec4(0.0); float s = u_strength * 0.15 * (0.6 + 0.4 * sin(u_time * rate() * 4.0)); for (int i = 0; i < 12; i++) { acc += src(c * (1.0 - s * float(i) / 11.0) + 0.5); } outColor = acc / 12.0; }`,strobe:`void main() { vec4 c = src(v_uv); float on = step(0.5, fract(u_time * (2.0 + u_speed * 10.0))); c.rgb = mix(c.rgb, vec3(c.a), on * u_strength * 0.8); outColor = c; }`,vhs:`void main() {
    vec2 uv = v_uv; float t = u_time * rate();
    float line = hash11(floor(uv.y * 240.0) + floor(t * 12.0));
    uv.x += (line - 0.5) * 0.004 * u_strength + sin(uv.y * 30.0 + t * 5.0) * 0.002 * u_strength;
    float off = 0.004 * u_strength;
    vec4 c = vec4(src(uv + vec2(off, 0.0)).r, src(uv).g, src(uv - vec2(off, 0.0)).b, src(uv).a);
    c.rgb *= 0.92 + 0.08 * sin(uv.y * u_res.y * 1.5);
    float band = smoothstep(0.0, 0.02, abs(fract(uv.y + t * 0.1) - 0.5) - 0.48);
    c.rgb += (1.0 - band) * 0.15 * u_strength;
    c.rgb += (hash12(uv * u_res + t) - 0.5) * 0.08 * u_strength;
    outColor = c; }`,"film-grain":`void main() { vec4 c = src(v_uv); float n = hash12(v_uv * u_res + floor(u_time * 24.0) * 13.7) - 0.5; c.rgb += n * (0.05 + u_strength * 0.25) * c.a; outColor = c; }`,"old-film":`void main() {
    float t = floor(u_time * 18.0);
    vec2 uv = v_uv + vec2(0.0, (hash11(t) - 0.5) * 0.004 * u_strength);
    vec4 c = src(uv); float l = luma(c.rgb);
    vec3 sep = vec3(l) * vec3(1.07, 0.95, 0.78);
    c.rgb = mix(c.rgb, sep, 0.6 + 0.4 * u_strength);
    c.rgb *= 0.9 + 0.1 * hash11(t * 3.1);
    float scratch = step(0.997 - u_strength * 0.004, hash11(floor(v_uv.x * 300.0) + t));
    c.rgb += scratch * 0.25;
    c.rgb += (hash12(v_uv * u_res + t) - 0.5) * 0.12 * u_strength;
    c.rgb *= 1.0 - smoothstep(0.3, 0.9, distance(v_uv, vec2(0.5))) * 0.6;
    outColor = c; }`,scanlines:`void main() { vec4 c = src(v_uv); float s = 0.5 + 0.5 * sin((v_uv.y * u_res.y * 0.5 + u_time * rate() * 20.0)); c.rgb *= 1.0 - s * u_strength * 0.45; outColor = c; }`,posterize:`void main() { vec4 c = src(v_uv); float levels = mix(12.0, 3.0, u_strength); vec3 rgb = c.a > 0.0 ? c.rgb / c.a : c.rgb; rgb = floor(rgb * levels + 0.5) / levels; outColor = vec4(rgb * c.a, c.a); }`,glow:`void main() {
    vec4 c = src(v_uv); vec4 b = vec4(0.0); float n = 0.0;
    for (int i = -4; i <= 4; i++) for (int j = -4; j <= 4; j++) { float w = exp(-float(i*i + j*j) / 10.0); b += src(v_uv + vec2(i, j) * u_texel * 6.0) * w; n += w; }
    b /= n; vec3 bright = max(b.rgb - 0.45, 0.0) * 2.0;
    c.rgb = 1.0 - (1.0 - c.rgb) * (1.0 - bright * (0.4 + u_strength * 1.2));
    c.rgb = mix(c.rgb, c.rgb * 0.9 + 0.08, 0.3 * u_strength);
    outColor = c; }`,"light-leak":`void main() {
    vec4 c = src(v_uv); float t = u_time * rate() * 0.4;
    vec2 p1 = vec2(0.1 + 0.3 * sin(t), 0.2 + 0.2 * cos(t * 1.3));
    vec2 p2 = vec2(0.9 - 0.2 * cos(t * 0.7), 0.8 + 0.15 * sin(t * 1.7));
    vec3 leak = vec3(1.0, 0.45, 0.15) * smoothstep(0.7, 0.0, distance(v_uv, p1)) + vec3(1.0, 0.2, 0.4) * smoothstep(0.6, 0.0, distance(v_uv, p2));
    c.rgb = 1.0 - (1.0 - c.rgb) * (1.0 - leak * u_strength * 0.9);
    outColor = c; }`,flash:`void main() { vec4 c = src(v_uv); float p = pow(max(0.0, sin(u_time * rate() * 3.1416)), 8.0); c.rgb = mix(c.rgb, vec3(c.a), p * u_strength); outColor = c; }`,sparkle:`void main() {
    vec4 c = src(v_uv); vec2 g = v_uv * vec2(u_res.x / u_res.y, 1.0) * 18.0; vec2 id = floor(g); vec2 f = fract(g) - 0.5;
    float h = hash12(id); float tw = 0.5 + 0.5 * sin(u_time * rate() * 4.0 + h * 40.0);
    vec2 o = (vec2(hash12(id + 3.1), hash12(id + 7.7)) - 0.5) * 0.6; float d = length(f - o);
    float star = step(0.88, h) * tw * (smoothstep(0.08, 0.0, d) + smoothstep(0.02, 0.0, abs((f - o).x)) * smoothstep(0.25, 0.0, abs((f - o).y)) * 0.6 + smoothstep(0.02, 0.0, abs((f - o).y)) * smoothstep(0.25, 0.0, abs((f - o).x)) * 0.6);
    c.rgb += star * u_strength * 1.2; outColor = c; }`,"rgb-split":`void main() { float o = (0.003 + u_strength * 0.02) * (0.6 + 0.4 * sin(u_time * rate() * 4.0)); vec4 g = src(v_uv); outColor = vec4(src(v_uv + vec2(o, 0.0)).r, g.g, src(v_uv - vec2(o, 0.0)).b, g.a); }`,glitch:`void main() {
    float t = floor(u_time * (6.0 + u_speed * 20.0));
    vec2 uv = v_uv; float block = floor(uv.y * (8.0 + hash11(t) * 24.0));
    float on = step(1.0 - u_strength * 0.6, hash11(block + t * 1.7));
    uv.x += on * (hash11(block * 3.3 + t) - 0.5) * 0.15 * u_strength;
    float o = on * 0.02 * u_strength;
    vec4 c = vec4(src(uv + vec2(o, 0.0)).r, src(uv).g, src(uv - vec2(o, 0.0)).b, src(uv).a);
    outColor = c; }`,wave:`void main() { vec2 uv = v_uv; uv.x += sin(uv.y * 18.0 + u_time * rate() * 4.0) * 0.012 * u_strength * 2.0; uv.y += cos(uv.x * 14.0 + u_time * rate() * 3.0) * 0.008 * u_strength * 2.0; outColor = src(uv); }`,bulge:`void main() { vec2 c = v_uv - 0.5; float r = length(c); float k = u_strength * 0.9; vec2 uv = 0.5 + c * (1.0 - k * 0.5 + k * r * r * 1.4); outColor = (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) ? vec4(0.0) : src(uv); }`,pixelate:`void main() { float cells = mix(160.0, 14.0, u_strength); vec2 size = vec2(cells * u_res.x / u_res.y, cells); outColor = src((floor(v_uv * size) + 0.5) / size); }`,mirror:`void main() { vec2 uv = v_uv; if (u_strength > 0.5) uv.y = uv.y > 0.5 ? 1.0 - uv.y : uv.y; uv.x = uv.x > 0.5 ? 1.0 - uv.x : uv.x; outColor = src(uv); }`,kaleidoscope:`void main() { vec2 p = v_uv - 0.5; p.x *= u_res.x / u_res.y; float a = atan(p.y, p.x) + u_time * rate() * 0.3; float r = length(p); float seg = 6.2831 / floor(4.0 + u_strength * 8.0); a = mod(a, seg); a = abs(a - seg * 0.5); vec2 q = vec2(cos(a), sin(a)) * r; q.x /= u_res.x / u_res.y; outColor = src(q + 0.5); }`,edge:`void main() {
    float tl = luma(src(v_uv + u_texel * vec2(-1, 1)).rgb), t = luma(src(v_uv + u_texel * vec2(0, 1)).rgb), tr = luma(src(v_uv + u_texel * vec2(1, 1)).rgb);
    float l = luma(src(v_uv + u_texel * vec2(-1, 0)).rgb), r = luma(src(v_uv + u_texel * vec2(1, 0)).rgb);
    float bl = luma(src(v_uv + u_texel * vec2(-1, -1)).rgb), b = luma(src(v_uv + u_texel * vec2(0, -1)).rgb), br = luma(src(v_uv + u_texel * vec2(1, -1)).rgb);
    float gx = -tl - 2.0 * l - bl + tr + 2.0 * r + br; float gy = -bl - 2.0 * b - br + tl + 2.0 * t + tr;
    float e = clamp(length(vec2(gx, gy)) * 2.0, 0.0, 1.0);
    vec4 c = src(v_uv); vec3 sketch = vec3(1.0 - e);
    outColor = vec4(mix(c.rgb, sketch * c.a, 0.4 + 0.6 * u_strength), c.a); }`,halftone:`void main() {
    float cells = mix(140.0, 40.0, u_strength); vec2 g = v_uv * vec2(cells * u_res.x / u_res.y, cells);
    vec2 id = floor(g); vec2 f = fract(g) - 0.5;
    vec4 c = src((id + 0.5) / vec2(cells * u_res.x / u_res.y, cells)); float l = luma(c.rgb);
    float dot = smoothstep(0.05, 0.0, length(f) - sqrt(1.0 - l) * 0.55);
    outColor = vec4(mix(vec3(1.0), c.rgb * 0.6, dot) * c.a, c.a); }`,"split-screen":`void main() { vec2 uv = v_uv; float n = u_strength > 0.66 ? 4.0 : u_strength > 0.33 ? 3.0 : 2.0; uv.x = fract(uv.x * n); uv.x = (uv.x - 0.5) / n * 1.0 + 0.5; outColor = src(vec2(uv.x * 1.0, v_uv.y)); }`,letterbox:`void main() { vec4 c = src(v_uv); float bar = 0.06 + u_strength * 0.1; float m = step(bar, v_uv.y) * step(v_uv.y, 1.0 - bar); outColor = vec4(c.rgb * m, mix(1.0, c.a, m)); }`,...Fe,...ze};function Ze(e){let t=Object.hasOwn(Xe,e)?Xe[e]:null;return t?Ye+Pe+t:null}var Qe=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_tex;
uniform float u_opacity;
uniform vec2 u_texel;
uniform float u_blur;
out vec4 outColor;
void main() {
  vec4 c;
  if (u_blur > 0.0) {
    c = vec4(0.0);
    for (int i = -3; i <= 3; i++) for (int j = -3; j <= 3; j++) c += texture(u_tex, v_uv + vec2(float(i), float(j)) * u_texel * u_blur);
    c /= 49.0;
  } else {
    c = texture(u_tex, v_uv);
  }
  outColor = c * u_opacity;
}`,$e=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_from;
uniform sampler2D u_to;
uniform float u_progress;
uniform vec2 u_res;
out vec4 outColor;
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
vec4 A(vec2 uv) { return (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) ? vec4(0.0) : texture(u_from, uv); }
vec4 B(vec2 uv) { return (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) ? vec4(0.0) : texture(u_to, uv); }
float ease(float p) { return p < 0.5 ? 4.0 * p * p * p : 1.0 - pow(-2.0 * p + 2.0, 3.0) / 2.0; }
float aspect() { return u_res.x / u_res.y; }
`,et={mix:`void main() { outColor = mix(A(v_uv), B(v_uv), u_progress); }`,"dip-black":`void main() { float p = u_progress; vec4 c = p < 0.5 ? A(v_uv) * (1.0 - p * 2.0) : B(v_uv) * (p * 2.0 - 1.0); outColor = vec4(c.rgb, mix(1.0, 1.0, p)); }`,"dip-white":`void main() { float p = u_progress; vec4 c = p < 0.5 ? A(v_uv) : B(v_uv); float w = 1.0 - abs(p * 2.0 - 1.0); outColor = vec4(mix(c.rgb, vec3(1.0), w), 1.0); }`,blur:`void main() {
    float p = u_progress; float r = sin(p * 3.1416) * 18.0; vec4 a = vec4(0.0), b = vec4(0.0);
    for (int i = -3; i <= 3; i++) for (int j = -3; j <= 3; j++) { vec2 o = vec2(i, j) * r / u_res; a += A(v_uv + o); b += B(v_uv + o); }
    outColor = mix(a, b, smoothstep(0.3, 0.7, p)) / 49.0; }`,"zoom-in":`void main() { float p = ease(u_progress); vec4 a = A((v_uv - 0.5) / (1.0 + p * 1.5) + 0.5); vec4 b = B((v_uv - 0.5) * (1.0 + (1.0 - p) * 0.4) + 0.5); outColor = mix(a, b, smoothstep(0.35, 0.75, u_progress)); }`,"zoom-out":`void main() { float p = ease(u_progress); vec4 a = A((v_uv - 0.5) * (1.0 + p * 1.0) + 0.5); vec4 b = B((v_uv - 0.5) / (1.0 + (1.0 - p) * 1.2) + 0.5); outColor = mix(a, b, smoothstep(0.35, 0.75, u_progress)); }`,"wipe-left":`void main() { float e = 0.02; float m = smoothstep(u_progress - e, u_progress + e, 1.0 - v_uv.x); outColor = mix(B(v_uv), A(v_uv), m); }`,"wipe-right":`void main() { float e = 0.02; float m = smoothstep(u_progress - e, u_progress + e, v_uv.x); outColor = mix(B(v_uv), A(v_uv), m); }`,"wipe-up":`void main() { float e = 0.02; float m = smoothstep(u_progress - e, u_progress + e, v_uv.y); outColor = mix(B(v_uv), A(v_uv), m); }`,"wipe-down":`void main() { float e = 0.02; float m = smoothstep(u_progress - e, u_progress + e, 1.0 - v_uv.y); outColor = mix(B(v_uv), A(v_uv), m); }`,"slide-left":`void main() { float p = ease(u_progress); vec2 uv = v_uv + vec2(p, 0.0); outColor = uv.x < 1.0 ? A(uv) : B(uv - vec2(1.0, 0.0)); }`,"slide-right":`void main() { float p = ease(u_progress); vec2 uv = v_uv - vec2(p, 0.0); outColor = uv.x >= 0.0 ? A(uv) : B(uv + vec2(1.0, 0.0)); }`,"slide-up":`void main() { float p = ease(u_progress); vec2 uv = v_uv - vec2(0.0, p); outColor = uv.y >= 0.0 ? A(uv) : B(uv + vec2(0.0, 1.0)); }`,"slide-down":`void main() { float p = ease(u_progress); vec2 uv = v_uv + vec2(0.0, p); outColor = uv.y < 1.0 ? A(uv) : B(uv - vec2(0.0, 1.0)); }`,"circle-open":`void main() { vec2 p = (v_uv - 0.5) * vec2(aspect(), 1.0); float r = ease(u_progress) * length(vec2(aspect(), 1.0)) * 0.5; outColor = mix(A(v_uv), B(v_uv), 1.0 - smoothstep(r - 0.01, r + 0.01, length(p))); }`,"circle-close":`void main() { vec2 p = (v_uv - 0.5) * vec2(aspect(), 1.0); float r = (1.0 - ease(u_progress)) * length(vec2(aspect(), 1.0)) * 0.5; outColor = mix(B(v_uv), A(v_uv), 1.0 - smoothstep(r - 0.01, r + 0.01, length(p))); }`,diamond:`void main() { vec2 p = abs(v_uv - 0.5) * vec2(aspect(), 1.0); float d = p.x + p.y; float r = ease(u_progress) * (aspect() * 0.5 + 0.5); outColor = mix(A(v_uv), B(v_uv), 1.0 - smoothstep(r - 0.01, r + 0.01, d)); }`,clock:`void main() { vec2 p = v_uv - 0.5; float a = atan(p.x, p.y); float t = (a + 3.14159) / 6.28318; outColor = mix(A(v_uv), B(v_uv), step(1.0 - u_progress, 1.0 - t)); }`,blinds:`void main() { float n = 10.0; float f = fract(v_uv.x * n); outColor = mix(A(v_uv), B(v_uv), step(f, u_progress)); }`,"split-open":`void main() { float p = ease(u_progress); float d = abs(v_uv.x - 0.5) * 2.0; outColor = d < p ? B(v_uv) : A(vec2(v_uv.x < 0.5 ? v_uv.x + p * 0.5 : v_uv.x - p * 0.5, v_uv.y)); }`,pixelize:`void main() { float s = sin(u_progress * 3.1416); float cells = mix(400.0, 12.0, s); vec2 size = vec2(cells * aspect(), cells); vec2 uv = s > 0.02 ? (floor(v_uv * size) + 0.5) / size : v_uv; outColor = mix(A(uv), B(uv), step(0.5, u_progress)); }`,glitch:`void main() {
    float s = sin(u_progress * 3.1416); float t = floor(u_progress * 30.0);
    float block = floor(v_uv.y * 18.0); float off = (hash11(block + t) - 0.5) * 0.2 * s * step(0.4, hash11(block * 1.3 + t));
    vec2 uv = v_uv + vec2(off, 0.0);
    vec4 a = vec4(A(uv + vec2(0.02 * s, 0.0)).r, A(uv).g, A(uv - vec2(0.02 * s, 0.0)).b, A(uv).a);
    vec4 b = vec4(B(uv + vec2(0.02 * s, 0.0)).r, B(uv).g, B(uv - vec2(0.02 * s, 0.0)).b, B(uv).a);
    outColor = mix(a, b, step(0.5, u_progress)); }`,spin:`void main() {
    float p = ease(u_progress); vec2 c = (v_uv - 0.5) * vec2(aspect(), 1.0); float ang = p * 6.2831; float z = 1.0 + sin(p * 3.1416) * 1.5;
    vec2 q = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * c * z; q.x /= aspect(); q += 0.5;
    outColor = mix(A(q), B(q), smoothstep(0.4, 0.6, u_progress)); }`,flash:`void main() { float w = pow(1.0 - abs(u_progress * 2.0 - 1.0), 2.0); vec4 c = mix(A(v_uv), B(v_uv), step(0.5, u_progress)); outColor = vec4(mix(c.rgb, vec3(1.0), w), max(c.a, w)); }`,ripple:`void main() { vec2 p = v_uv - 0.5; float d = length(p); float s = sin(u_progress * 3.1416); vec2 uv = v_uv + normalize(p + 1e-5) * sin(d * 60.0 - u_progress * 30.0) * 0.02 * s; outColor = mix(A(uv), B(uv), smoothstep(0.2, 0.8, u_progress)); }`,"color-burn":`void main() { vec4 a = A(v_uv), b = B(v_uv); float p = u_progress; vec3 burn = mix(a.rgb, vec3(1.0, 0.55, 0.1) * (a.rgb + 0.2), sin(p * 3.1416)); outColor = mix(vec4(burn, a.a), b, smoothstep(0.45, 0.75, p)); }`,...Le};function tt(e){let t=Object.hasOwn(et,e)?et[e]:et.mix;return $e+Ie+t}var O=new Map,nt=new Map,k=new Set,rt=new Set,it=0;function at(e){return O.get(e)||null}function ot(e,t,r=``){let i=n(t),a={id:e,name:r||t.title||`LUT`,size:i.size,data:i.data,domainMin:t.domainMin,domainMax:t.domainMax,version:++it};return O.set(e,a),k.delete(e),rt.forEach(t=>t(e)),a}function st(e){O.delete(e)}function ct(e){return rt.add(e),()=>rt.delete(e)}function lt(e){let t=new Set;for(let n of e?.tracks||[])for(let e of n.clips)e.grade?.lut?.id&&t.add(e.grade.lut.id);return t}function ut(e,n){if(O.has(e))return Promise.resolve(O.get(e));if(k.has(e)||!n?.readLut)return Promise.resolve(null);let r=nt.get(e);return r||(r=(async()=>{try{let{text:r,name:i}=await n.readLut(e);return ot(e,t(r),i)}catch(t){return console.warn(`LUT ${e} could not be loaded`,t),k.add(e),null}finally{nt.delete(e)}})(),nt.set(e,r)),r}async function dt(e,t){let n=[...lt(e)].filter(e=>!O.has(e)&&!k.has(e));return n.length?(await Promise.all(n.map(e=>ut(e,t)))).some(Boolean):!1}function ft(e){return k.has(e)}var pt=Math.PI*2;function mt(e,t){let n=[],r=Math.max(3,Math.round(e));for(let e=0;e<r*2;e++){let i=e%2?t:1,a=-Math.PI/2+e*Math.PI/r;n.push([Math.cos(a)*i,Math.sin(a)*i])}return n}function ht(e){let t=[],n=Math.max(3,Math.round(e));for(let e=0;e<n;e++){let r=-Math.PI/2+e*pt/n;t.push([Math.cos(r),Math.sin(r)])}return t}function gt(e=96){let t=[];for(let n=0;n<e;n++){let r=n*pt/e;t.push([Math.cos(r),Math.sin(r)])}return t}var A=null;function _t(e=96){if(A&&A.length===e)return A;let t=[];for(let n=0;n<e;n++){let r=n*pt/e,i=16*Math.sin(r)**3,a=-(13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r));t.push([i,a])}let n=t.map(e=>e[0]),r=t.map(e=>e[1]),i=Math.min(...n),a=Math.max(...n),o=Math.min(...r),s=Math.max(...r);return A=t.map(([e,t])=>[(e-i)/(a-i)*2-1,(t-o)/(s-o)*2-1]),A}function vt(e,t,n,r=10){let i=Math.max(0,Math.min(n,e,t));if(i<=1e-6)return[[-e,-t],[e,-t],[e,t],[-e,t]];let a=[],o=[[e-i,-t+i,-Math.PI/2],[e-i,t-i,0],[-e+i,t-i,Math.PI/2],[-e+i,-t+i,Math.PI]];for(let[e,t,n]of o)for(let o=0;o<=r;o++){let s=n+o/r*(Math.PI/2);a.push([e+Math.cos(s)*i,t+Math.sin(s)*i])}return a}function yt(e,t,n,r,i){let a=1-i,o=a*a*a,s=3*a*a*i,c=3*a*i*i,l=i*i*i;return[o*e[0]+s*t[0]+c*n[0]+l*r[0],o*e[1]+s*t[1]+c*n[1]+l*r[1]]}var bt=e=>e.ix||e.iy||e.ox||e.oy;function xt(e,t){let n=e[t],r=e[(t+1)%e.length];return[[n.x,n.y],[n.x+(n.ox||0),n.y+(n.oy||0)],[r.x+(r.ix||0),r.y+(r.iy||0)],[r.x,r.y]]}function St(e,t=16){let n=[],r=[],i=e.length;if(i<2)return{pts:e.map(e=>[e.x,e.y]),at:e.map((e,t)=>({seg:t,t:0}))};for(let a=0;a<i;a++){let o=e[a],s=e[(a+1)%i];if(!(o.ox||o.oy||s.ix||s.iy)){n.push([o.x,o.y]),r.push({seg:a,t:0});continue}let[c,l,u,d]=xt(e,a);for(let e=0;e<t;e++){let i=e/t;n.push(yt(c,l,u,d,i)),r.push({seg:a,t:i})}}return{pts:n,at:r}}function Ct(e,t,n){let r=e.length,i=e[t],a=e[(t+1)%r],[o,s,c,l]=xt(e,t),u=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n],d=u(o,s,n),f=u(s,c,n),p=u(c,l,n),m=u(d,f,n),h=u(f,p,n),g=u(m,h,n),_=bt({ox:i.ox,oy:i.oy})||bt({ix:a.ix,iy:a.iy}),v=e.map(e=>({...e})),y={x:g[0],y:g[1],ix:0,iy:0,ox:0,oy:0};if(_){v[t].ox=d[0]-o[0],v[t].oy=d[1]-o[1],y.ix=m[0]-g[0],y.iy=m[1]-g[1],y.ox=h[0]-g[0],y.oy=h[1]-g[1];let e=(t+1)%r;v[e].ix=p[0]-l[0],v[e].iy=p[1]-l[1]}return v.splice(t+1,0,y),v}function wt(e,t){let n={dist:1/0,index:-1,t:0};for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length],o=a[0]-i[0],s=a[1]-i[1],c=o*o+s*s,l=c?Math.max(0,Math.min(1,((t[0]-i[0])*o+(t[1]-i[1])*s)/c)):0,u=Math.hypot(i[0]+o*l-t[0],i[1]+s*l-t[1]);u<n.dist&&(n={dist:u,index:r,t:l})}return n}function Tt(e,t,n){return{a:Math.abs(e.w)*t/2,b:Math.abs(e.h)*n/2}}function Et(e,t,n){let{a:r,b:i}=Tt(e,t,n),a=e=>e.map(([e,t])=>[e*r,t*i]);switch(e.type){case`ellipse`:return a(gt(96));case`rectangle`:return vt(r,i,(e.roundness||0)/100*Math.min(r,i));case`star`:return a(mt(e.count||5,e.inner??.45));case`polygon`:return a(ht(e.count||6));case`heart`:return a(_t(96));case`pen`:return e.path?.length?St(e.path).pts.map(([e,t])=>[e*2*r,t*2*i]):null;default:return null}}function Dt(e,t,n,r,i){let a=(e.rotation||0)*Math.PI/180,o=Math.cos(a),s=Math.sin(a);return[(.5+e.x)*t+r*o-i*s,(.5+e.y)*n+r*s+i*o]}function Ot(e,t,n,r,i){let a=(e.rotation||0)*Math.PI/180,o=Math.cos(a),s=Math.sin(a),c=r-(.5+e.x)*t,l=i-(.5+e.y)*n;return[c*o+l*s,-c*s+l*o]}function kt(e,t,n,r,i,a){let o=e.crop||{l:0,t:0,r:0,b:0},s=(i/n-o.l)/Math.max(1e-6,1-o.l-o.r),c=(a/r-o.t)/Math.max(1e-6,1-o.t-o.b);e.flipH&&(s=1-s),e.flipV&&(c=1-c);let l=(s-.5)*t.w,u=(c-.5)*t.h,d=(e.rotation||0)*Math.PI/180,f=Math.cos(d),p=Math.sin(d);return[t.cx+l*f-u*p,t.cy+l*p+u*f]}function At(e,t,n,r,i,a){let o=e.crop||{l:0,t:0,r:0,b:0},s=(e.rotation||0)*Math.PI/180,c=Math.cos(s),l=Math.sin(s),u=i-t.cx,d=a-t.cy,f=u*c+d*l,p=-u*l+d*c,m=f/(t.w||1)+.5,h=p/(t.h||1)+.5;return e.flipH&&(m=1-m),e.flipV&&(h=1-h),[(o.l+m*(1-o.l-o.r))*n,(o.t+h*(1-o.t-o.b))*r]}function jt(e,t,n,r,i,a){let o=-1/0,s=1/0;for(let[c,l,u,d]of[[e[0],t[0],n,i],[e[1],t[1],r,a]]){if(Math.abs(l)<1e-12){if(c<u||c>d)return null;continue}let e=(u-c)/l,t=(d-c)/l;e>t&&([e,t]=[t,e]),o=Math.max(o,e),s=Math.min(s,t)}return o>s?null:[[e[0]+t[0]*o,e[1]+t[1]*o],[e[0]+t[0]*s,e[1]+t[1]*s]]}var Mt=[128,256,384,512,768,1024,1536,2048],Nt={add:`source-over`,subtract:`destination-out`,intersect:`destination-in`},Pt=new Set,j=new Set;function Ft(e,t){if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(e,t);if(typeof document>`u`)return null;let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function It(e){let t=typeof document<`u`?document.fonts:null;if(!t?.check)return!0;let n=!0;try{n=t.check(e)}catch{n=!0}return!n&&!j.has(e)&&(j.add(e),t.load(e).then(()=>{j.delete(e);for(let e of Pt)e()},()=>j.delete(e))),n}var Lt=(e,t)=>r({font:e.font||`Inter`,bold:e.bold,italic:!1},t);function Rt(e){for(let t of Mt)if(t>=e)return t;return Mt[Mt.length-1]}function zt(e,t){for(let n=0;n<t.length;n++)e=Math.imul(e,31)+Math.round(t[n]*1e4)|0;return e}function Bt(e,t,n,r){let i=`${t}x${n}@${r}`;for(let t of e)if(g(t)){if(i+=`|${t.type},${t.mode},${t.x.toFixed(5)},${t.y.toFixed(5)},${t.w.toFixed(5)},${t.h.toFixed(5)},${(t.rotation||0).toFixed(3)},${(t.feather||0).toFixed(2)},${(t.opacity??1).toFixed(3)},${+!!t.invert}`,t.type===`rectangle`&&(i+=`,${t.roundness||0}`),(t.type===`star`||t.type===`polygon`)&&(i+=`,${t.count},${t.inner??``}`),t.type===`text`&&(i+=`,${t.font},${+!!t.bold},${+!!It(Lt(t,64))},${t.text}`),t.type===`pen`){let e=t.path.length;for(let n of t.path)e=zt(e,[n.x,n.y,n.ix,n.iy,n.ox,n.oy]);i+=`,${e}`}if(t.type===`brush`){let e=t.strokes.length;for(let n of t.strokes)e=zt(zt(e,[n.size,+!!n.erase,n.pts.length]),n.pts);i+=`,${e}`}}return i}var M=null;function Vt(e){return M===null&&(M=`filter`in e,M&&(e.filter=`blur(2px)`,M=e.filter===`blur(2px)`,e.filter=`none`)),M}function Ht(e,t,n,r){if(r<.5)return e;let i=Math.sqrt(12*r*r/3+1),a=Math.max(1,Math.round((i-1)/2)),o=new Float32Array(e.length),s=(e,r,i)=>{let o=i?n:t,s=i?t:n,c=i?1:t,l=i?t:1,u=1/(2*a+1);for(let t=0;t<o;t++){let n=t*l,i=0;for(let t=-a;t<=a;t++)i+=e[n+Math.min(s-1,Math.max(0,t))*c];for(let t=0;t<s;t++){r[n+t*c]=i*u;let o=Math.min(s-1,t+a+1),l=Math.max(0,t-a);i+=e[n+o*c]-e[n+l*c]}}};for(let t=0;t<3;t++)s(e,o,!0),s(o,e,!1);return e}function Ut(e,t,n,r,i){let{a,b:o}=Tt(t,n,r);e.setTransform(i,0,0,i,0,0),e.translate((.5+t.x)*n,(.5+t.y)*r),e.rotate((t.rotation||0)*Math.PI/180),e.fillStyle=`#fff`,e.strokeStyle=`#fff`;let s=4*Math.max(n,r)+Math.hypot(t.x*n,t.y*r)*2;switch(t.type){case`split`:e.fillRect(-s,0,s*2,s);break;case`band`:e.fillRect(-s,-o,s*2,o*2);break;case`text`:{let n=String(t.text||``).split(`
`);e.font=Lt(t,100);let r=Math.max(1,...n.map(t=>e.measureText(t||` `).width)),i=Math.max(1,Math.min(2*a*100/r,2*o/(n.length*1.1)));e.font=Lt(t,i),e.textAlign=`center`,e.textBaseline=`middle`;let s=i*1.1;n.forEach((t,r)=>e.fillText(t,0,(r-(n.length-1)/2)*s));break}case`brush`:{e.lineCap=`round`,e.lineJoin=`round`;let n=Math.min(2*a,2*o);for(let r of t.strokes){e.globalCompositeOperation=r.erase?`destination-out`:`source-over`,e.lineWidth=Math.max(.5,r.size*n),e.beginPath();let t=r.pts;if(t.length===2)e.arc(t[0]*2*a,t[1]*2*o,e.lineWidth/2,0,Math.PI*2),e.fill();else{e.moveTo(t[0]*2*a,t[1]*2*o);for(let n=2;n<t.length;n+=2)e.lineTo(t[n]*2*a,t[n+1]*2*o);e.stroke()}}e.globalCompositeOperation=`source-over`;break}case`pen`:{let n=t.path,r=2*a,i=2*o;e.beginPath(),e.moveTo(n[0].x*r,n[0].y*i);for(let t=0;t<n.length;t++){let a=n[t],o=n[(t+1)%n.length];a.ox||a.oy||o.ix||o.iy?e.bezierCurveTo((a.x+a.ox)*r,(a.y+a.oy)*i,(o.x+o.ix)*r,(o.y+o.iy)*i,o.x*r,o.y*i):e.lineTo(o.x*r,o.y*i)}e.closePath(),e.fill();break}default:{let i=Et(t,n,r);if(!i?.length)break;e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let t=1;t<i.length;t++)e.lineTo(i[t][0],i[t][1]);e.closePath(),e.fill()}}e.setTransform(1,0,0,1,0,0)}function Wt(e,t,n){return(e.feather||0)/100*.2*Math.min(t,n)}var Gt=class{constructor(){this.entries=new Map,this.frame=0,this.scratch=null}_canvas(e,t,n){return n&&n.width===e&&n.height===t?n:Ft(e,t)}get(e,t,n,r,i){if(this.frame++,!t?.some(g)||!(n>0)||!(r>0))return null;let a=Rt(i),o=Bt(t,n,r,a),s=this.entries.get(e);if(s&&s.key===o)return s.used=this.frame,{canvas:s.canvas,key:o,width:s.canvas.width,height:s.canvas.height};let c=a/Math.max(n,r),l=Math.max(2,Math.round(n*c)),u=Math.max(2,Math.round(r*c)),d=this._canvas(l,u,s?.canvas);return!d||!this.render(d,t,n,r,c)?null:(s={key:o,canvas:d,used:this.frame},this.entries.set(e,s),this._gc(),{canvas:d,key:o,width:l,height:u})}render(e,t,n,r,i){let a=e.width,o=e.height,s=e.getContext(`2d`);if(!s)return!1;this.scratch=this.scratch||{shape:null,cover:null};let c=this.scratch.shape=this._canvas(a,o,this.scratch.shape),l=this.scratch.cover=this._canvas(a,o,this.scratch.cover),u=c.getContext(`2d`),d=l.getContext(`2d`);if(!u||!d)return!1;s.setTransform(1,0,0,1,0,0),s.globalAlpha=1,s.globalCompositeOperation=`source-over`,s.clearRect(0,0,a,o);let f=t.filter(g);return f[0]?.mode===`subtract`&&(s.fillStyle=`#fff`,s.fillRect(0,0,a,o)),f.forEach((e,t)=>{u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,a,o),Ut(u,e,n,r,i);let f=Wt(e,n,r)*i;if(d.setTransform(1,0,0,1,0,0),d.globalCompositeOperation=`source-over`,d.globalAlpha=1,d.clearRect(0,0,a,o),f>=.5&&!Vt(d)){let t=u.getImageData(0,0,a,o),n=new Float32Array(a*o);for(let e=0;e<n.length;e++)n[e]=t.data[e*4+3];Ht(n,a,o,f);for(let r=0;r<n.length;r++){let i=e.invert?255-n[r]:n[r];t.data[r*4]=t.data[r*4+1]=t.data[r*4+2]=255,t.data[r*4+3]=i}d.putImageData(t,0,0)}else e.invert&&(d.fillStyle=`#fff`,d.fillRect(0,0,a,o),d.globalCompositeOperation=`destination-out`),f>=.5&&(d.filter=`blur(${f.toFixed(2)}px)`),d.drawImage(c,0,0),f>=.5&&(d.filter=`none`),d.globalCompositeOperation=`source-over`;let p=t===0&&e.mode!==`subtract`?`add`:e.mode;s.globalAlpha=Math.max(0,Math.min(1,e.opacity??1)),s.globalCompositeOperation=Nt[p]||`source-over`,s.drawImage(l,0,0)}),s.globalAlpha=1,s.globalCompositeOperation=`source-over`,!0}_gc(){if(!(this.entries.size<24))for(let[e,t]of this.entries)this.frame-t.used>600&&this.entries.delete(e)}dispose(){this.entries.clear(),this.scratch=null}},Kt={l:0,t:0,r:0,b:0},qt=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;
`,Jt=`${qt}
uniform int u_mode;
uniform vec3 u_c1, u_c2;
uniform vec2 u_dir;
void main() {
  if (u_mode == 0) { outColor = vec4(u_c1, 1.0); return; }
  float t = clamp(dot(v_uv - 0.5, u_dir) + 0.5, 0.0, 1.0);
  outColor = vec4(mix(u_c1, u_c2, t * t * (3.0 - 2.0 * t)), 1.0);
}`,Yt=`${qt}
uniform sampler2D u_tex;
uniform vec2 u_texel;
uniform float u_strength;
uniform float u_step;
void main() {
  vec4 c0 = texture(u_tex, v_uv);
  if (c0.a <= 0.002) { outColor = c0; return; }
  vec3 b0 = c0.rgb / c0.a;
  float sr = 0.025 + u_strength * 0.11;
  float ss = 1.2 + u_strength * 1.8;
  vec3 acc = vec3(0.0);
  float wa = 0.0;
  for (int i = -3; i <= 3; i++) {
    for (int j = -3; j <= 3; j++) {
      vec2 o = vec2(float(i), float(j));
      vec4 s = texture(u_tex, v_uv + o * u_texel * u_step);
      vec3 sb = s.a > 0.002 ? s.rgb / s.a : b0;
      vec3 d = sb - b0;
      float w = exp(-dot(o, o) / (2.0 * ss * ss) - dot(d, d) / (2.0 * sr * sr)) * s.a;
      acc += sb * w;
      wa += w;
    }
  }
  vec3 f = wa > 0.0 ? acc / wa : b0;
  outColor = vec4(mix(b0, f, clamp(0.35 + u_strength, 0.0, 1.0)) * c0.a, c0.a);
}`,Xt=`${qt}
uniform sampler2D u_tex;
uniform vec2 u_center;
uniform vec2 u_half;
uniform vec2 u_dir;
uniform float u_intensity;
uniform float u_temp;
void main() {
  vec4 c0 = texture(u_tex, v_uv);
  if (c0.a <= 0.002) { outColor = c0; return; }
  vec3 c = c0.rgb / c0.a;
  vec2 p = (v_uv - u_center) / max(u_half, vec2(1e-4));
  float side = smoothstep(-1.3, 1.3, dot(p, u_dir));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float gain = mix(1.0 - 0.45 * u_intensity, 1.0 + 0.65 * u_intensity, side);
  float w = 0.4 + 0.6 * smoothstep(0.0, 0.7, l);
  c *= mix(1.0, gain, w);
  vec3 tint = u_temp >= 0.0 ? mix(vec3(1.0), vec3(1.0, 0.8, 0.58), u_temp) : mix(vec3(1.0), vec3(0.62, 0.8, 1.0), -u_temp);
  c *= mix(vec3(1.0), tint, side * u_intensity);
  outColor = vec4(clamp(c, 0.0, 1.0) * c0.a, c0.a);
}`;function Zt(e){let t=parseInt(String(e||`#000000`).slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function Qt(e){let t=e*Math.PI/180,n=Math.sin(t),r=Math.cos(t),i=Math.abs(n)+Math.abs(r)||1;return[n/i,r/i]}function $t(e,t,n,r){let i=e.gl;e._seti(t,`u_maskTex`,6);let a=0,o=n.kind===`media`?n.masks:null;if(o?.length&&n.clip){let t=n.crop||Kt,s=e.width/(e.projW||1),c=Math.abs(r.w)/Math.max(.05,1-t.l-t.r)*s,l=Math.abs(r.h)/Math.max(.05,1-t.t-t.b)*s;e._maskRaster||=new Gt;let u=e._maskRaster.get(n.clip.id,o,n.width,n.height,Math.max(c,l));if(u){i.activeTexture(i.TEXTURE0+6);let t=e._texture({key:`mask:${n.clip.id}`,source:u.canvas,width:u.width,height:u.height,version:u.key});i.activeTexture(i.TEXTURE0),t&&(a=1)}}e._seti(t,`u_maskOn`,a)}function en(e,t,n,r,i){let a=e.gl;if(n.type===`blur`){let o=e.resolve(t);if(!o?.source)return;let s=e.projW,c=e.projH,l=o.width||t.width,u=o.height||t.height,d=Math.max(s/l,c/u),f=Math.min(s/l,c/u),p={...t,inner:!0,extras:null,masks:null,cutout:null,retouch:null,faceShape:null,hairColor:null,effects:null,x:0,y:0,rotation:0,opacity:1,blur:0,sx:1,sy:1,scale:d/f,crop:Kt,flipH:!1,flipV:!1},m=e._target(`clipBgS`,.125);e._into(m),a.disable(a.BLEND),a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),e._drawLayer(p,r);let h=e._blurInto(m.tex,e._target(`clipBgA`,.125),e._target(`clipBgB`,.125),.6+(n.blur??.5)*1.4);e._into(i),a.disable(a.BLEND),e._copy(h.tex);return}e._into(i),a.disable(a.BLEND);let o=e._use(e._program(`clipCanvas`,D,Jt));e._seti(o,`u_mode`,+(n.type===`gradient`)),e._set(o,`u_c1`,Zt(n.color)),e._set(o,`u_c2`,Zt(n.color2)),e._set(o,`u_dir`,Qt(n.angle??180)),e._fullPass(o)}function tn(e,t,n){let r=e.gl,i=t.extras,a=e._bound||null,o=r.isEnabled(r.BLEND),s=()=>{e._into(a),o?(r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA)):r.disable(r.BLEND)},c={...t,inner:!0};if(i.canvas&&en(e,t,i.canvas,n,a),!i.motion&&!i.denoise&&!i.relight)return s(),e._drawLayer(c,n);let l=e._target(`clipFxA`),u=e._target(`clipFxB`);e._into(l),r.disable(r.BLEND),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND);let d=!1;if(i.motion){r.blendFunc(r.ONE,r.ONE);let a=i.motion.length;for(let r of i.motion)d=e._drawLayer({...c,x:r.x,y:r.y,scale:r.scale,rotation:r.rotation,sx:r.sx??1,sy:r.sy??1,opacity:t.opacity/a},n)||d}else r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),d=e._drawLayer(c,n);if(!d)return s(),!1;let f=l,p=()=>f===l?u:l;if(r.disable(r.BLEND),i.denoise){let t=p();e._into(t);let n=e._use(e._program(`clipDenoise`,D,Yt));e._bindTex(0,f.tex),e._seti(n,`u_tex`,0),e._set(n,`u_texel`,1/f.w,1/f.h),e._set(n,`u_strength`,i.denoise),e._set(n,`u_step`,Math.max(1,e.width/(e.projW||1))),e._fullPass(n),f=t}if(i.relight){let n=e.resolve(t),r=e.layerBox(t,n),a=t.rotation*Math.PI/180,o=(Math.abs(r.w*Math.cos(a))+Math.abs(r.h*Math.sin(a)))/2,s=(Math.abs(r.w*Math.sin(a))+Math.abs(r.h*Math.cos(a)))/2,c=p();e._into(c);let l=e._use(e._program(`clipRelight`,D,Xt));e._bindTex(0,f.tex),e._seti(l,`u_tex`,0),e._set(l,`u_center`,r.cx/e.projW,1-r.cy/e.projH),e._set(l,`u_half`,o/e.projW,s/e.projH);let u=i.relight.angle*Math.PI/180;e._set(l,`u_dir`,Math.cos(u),Math.sin(u)),e._set(l,`u_intensity`,i.relight.intensity),e._set(l,`u_temp`,i.relight.temperature),e._fullPass(l),f=c}return e._into(a),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),e._copy(f.tex),s(),!0}var nn=new URL(`face-landmarker-y6w30NYK.task`,import.meta.url).href,N=Ae(async()=>{let{FaceLandmarker:e}=await ae(async()=>{let{FaceLandmarker:e}=await import(`./vision_bundle-CM9eEVyl.js`);return{FaceLandmarker:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url);return e.createFromOptions({wasmLoaderPath:Oe,wasmBinaryPath:Me},{baseOptions:{modelAssetPath:nn,delegate:`CPU`},runningMode:`IMAGE`,numFaces:3,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1})},`Face detection could not start in this browser.`),rn=()=>N.ready(),an=()=>N.state(),on=()=>N.error(),sn=e=>N.onChange(e);function cn(e){let t=N.instance;return t?(t.detect(e).faceLandmarks||[]).filter(e=>e.length>=478).map(e=>{let t=new Float32Array(956);for(let n=0;n<478;n++)t[n*2]=e[n].x,t[n*2+1]=e[n].y;return t}):null}var ln=new URL(`hair-segmenter-DqrQNb0x.tflite`,import.meta.url).href,P=Ae(async()=>{let{ImageSegmenter:e}=await ae(async()=>{let{ImageSegmenter:e}=await import(`./vision_bundle-CM9eEVyl.js`);return{ImageSegmenter:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url);return e.createFromOptions({wasmLoaderPath:Oe,wasmBinaryPath:Me},{baseOptions:{modelAssetPath:ln,delegate:`CPU`},runningMode:`IMAGE`,outputConfidenceMasks:!0,outputCategoryMask:!1})},`Hair color could not start in this browser.`),un=()=>P.ready(),dn=()=>P.state(),fn=()=>P.error(),pn=e=>P.onChange(e);function mn(e){let t=P.instance;if(!t)return null;let n=t.segment(e);try{let e=n.confidenceMasks?.[n.confidenceMasks.length-1];if(!e)return null;let t=e.getAsFloat32Array(),r=new Uint8ClampedArray(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]*255;return{data:r,width:e.width,height:e.height}}finally{n.close()}}var F=Object.freeze({oval:[10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],lipsOuter:[61,185,40,39,37,0,267,269,270,409,291,375,321,405,314,17,84,181,91,146],lipsInner:[78,191,80,81,82,13,312,311,310,415,308,324,318,402,317,14,87,178,88,95],eyeA:[33,246,161,160,159,158,157,173,133,155,154,153,145,144,163,7],eyeB:[263,466,388,387,386,385,384,398,362,382,381,380,374,373,390,249],lowerLidA:[33,7,163,144,145,153,154,155,133],lowerLidB:[263,249,390,373,374,380,381,382,362],browA:[70,63,105,66,107,55,65,52,53,46],browB:[300,293,334,296,336,285,295,282,283,276],jawA:[93,132,172,150],jawB:[323,361,397,379],irisA:468,irisB:473,sideA:234,sideB:454,top:10,chin:152,mouthA:61,mouthB:291,lowerLip:17,noseTip:1,noseBase:2,alaA:98,alaB:327,wingA:129,wingB:358}),I=(e,t,n)=>Math.min(n,Math.max(t,e)),L=(e,t)=>[e[t*2],e[t*2+1]],R=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),hn=(e,t)=>[(e[0]+t[0])/2,(e[1]+t[1])/2],z=e=>R(L(e,F.sideA),L(e,F.sideB))||1;function gn(e){let t=[F.sideA,F.sideB,F.top,F.chin],n=0,r=0;for(let i of t)n+=e[i*2],r+=e[i*2+1];return[n/t.length,r/t.length]}function _n(e){let t=L(e,F.sideA),n=L(e,F.sideB),r=R(t,n)||1,i=[(n[0]-t[0])/r,(n[1]-t[1])/r];return{ux:i,uy:[-i[1],i[0]],width:r,height:R(L(e,F.top),L(e,F.chin))||r,center:gn(e)}}function vn(e,t){let n=Array(t.length).fill(-1),r=[];t.forEach((t,n)=>{let i=gn(t),a=z(t)*.5;e.forEach((e,t)=>{let o=R(i,gn(e));o<a&&r.push([o,n,t])})}),r.sort((e,t)=>e[0]-t[0]);let i=new Set;for(let[,e,t]of r)n[e]>=0||i.has(t)||(n[e]=t,i.add(t));return n}function yn(e,t,n,{minHz:r=1.2,gain:i=9,still:a=.1}={}){if(!e||e.length!==t.length||!(n>0)||n>.25)return Float32Array.from(t);let o=t.length/2,s=0;for(let n=0;n<t.length;n+=2)s+=Math.hypot(t[n]-e[n],t[n+1]-e[n+1]);let c=r+i*Math.max(0,s/o/z(t)/n-a),l=1/(1+1/(2*Math.PI*c)/n),u=new Float32Array(t.length);for(let n=0;n<t.length;n++)u[n]=e[n]+(t[n]-e[n])*l;return u}function bn(e,t,n,r){let i=e||[],a=vn(i.map(e=>e.pts),t),o=t.map((e,t)=>({pts:a[t]>=0?yn(i[a[t]].pts,e,r):Float32Array.from(e),seen:n}));return i.forEach((e,t)=>{!a.includes(t)&&Math.abs(n-e.seen)<.3&&o.push(e)}),o}var B=(e,t,n,r=0)=>({c:e,m:[1/t,0,0,1/t],d:n,s:r}),xn=(e,t,n,r,i,a,o=0)=>({c:e,m:[t[0]/n,t[1]/n,r[0]/i,r[1]/i],d:a,s:o});function Sn(e,t){let{ux:n,uy:r,width:i}=_n(e),a=[],o=(e,t)=>[e[0]*t,e[1]*t],{slim:s=0,eyes:c=0,nose:l=0,smile:u=0,chin:d=0}=t;if(s){let t=[.45,.8,1,.75],r=i*.3,c=s*i*.06;F.jawA.forEach((i,s)=>a.push(B(L(e,i),r,o(n,c*t[s])))),F.jawB.forEach((i,s)=>a.push(B(L(e,i),r,o(n,-c*t[s]))))}if(c)for(let[t,o,s]of[[F.irisA,33,133],[F.irisB,263,362]]){let l=R(L(e,o),L(e,s))||i*.2;a.push(xn(L(e,t),n,l*.95,r,l*.75,[0,0],c*.27))}if(l){let t=L(e,F.alaA),r=L(e,F.alaB),s=R(t,r)||i*.25,c=s*.5,u=l*s*.14;a.push(B(t,c,o(n,u)),B(r,c,o(n,-u))),a.push(B(L(e,F.wingA),c*.9,o(n,u*.6)),B(L(e,F.wingB),c*.9,o(n,-u*.6)))}if(u){let t=L(e,F.mouthA),o=L(e,F.mouthB),s=R(t,o)||i*.35,c=s*.34,l=u*s*.1,d=u*s*.02;a.push(B(t,c,[-r[0]*l-n[0]*d,-r[1]*l-n[1]*d])),a.push(B(o,c,[-r[0]*l+n[0]*d,-r[1]*l+n[1]*d]))}if(d){let t=L(e,F.chin),s=R(t,L(e,F.lowerLip))||i*.2;a.push(xn(t,n,i*.36,r,s*1.3,o(r,d*s*.38)))}return a}function Cn(e,t,n=`all`){let r=e||[];n===`largest`&&r.length>1&&(r=[r.reduce((e,t)=>z(t)>z(e)?t:e)]);let i=[],a=[];for(let e of r){let n=Sn(e,t);if(!n.length)continue;let r=gn(e),o=0;for(let e of n){let t=1/Math.min(Math.hypot(e.m[0],e.m[1]),Math.hypot(e.m[2],e.m[3]));o=Math.max(o,R(r,e.c)+t)}a.push({cx:r[0],cy:r[1],reach:o,first:i.length,end:i.length+n.length}),i.push(...n)}return{handles:i,groups:a}}function wn(e){let t=e.length,n=new Float32Array(Math.max(1,t)*3*4);return e.forEach((e,r)=>{n.set([e.c[0],e.c[1],e.d[0],e.d[1]],r*4),n.set(e.m,(t+r)*4),n[(2*t+r)*4]=e.s}),n}function V(e,t,n,r,i=`add`){let a=r.length/2;if(a<3)return e;let o=1/0,s=-1/0;for(let e=1;e<r.length;e+=2)o=Math.min(o,r[e]),s=Math.max(s,r[e]);let c=I(Math.floor(o),0,n),l=I(Math.ceil(s),0,n),u=new Float32Array(t),d=[];for(let n=c;n<l;n++){let o=t,s=-1;for(let e=0;e<4;e++){let i=n+(e+.5)/4;d.length=0;for(let e=0;e<a;e++){let t=r[e*2+1],n=e+1===a?0:e+1,o=r[n*2+1];if(t<=i!=o<=i){let a=r[e*2];d.push(a+(i-t)/(o-t)*(r[n*2]-a))}}d.sort((e,t)=>e-t);for(let e=0;e+1<d.length;e+=2){let n=I(d[e],0,t),r=I(d[e+1],0,t);if(r<=n)continue;let i=Math.floor(n),a=Math.min(t-1,Math.floor(r));o=Math.min(o,i),s=Math.max(s,a);for(let e=i;e<=a;e++)u[e]+=(Math.min(r,e+1)-Math.max(n,e))*.25}}if(s<o)continue;let c=n*t;for(let t=o;t<=s;t++){let n=Math.min(1,u[t]);u[t]=0,i===`cut`?e[c+t]*=1-n:n>e[c+t]&&(e[c+t]=n)}}return e}function Tn(e,t,n,r,i=null){if(r=Math.round(r),r<1)return e;let a=2*r+1,o=i?I(Math.floor(i[0])-a,0,t):0,s=i?I(Math.floor(i[1])-a,0,n):0,c=i?I(Math.ceil(i[2])+a,0,t):t,l=i?I(Math.ceil(i[3])+a,0,n):n;if(c<=o||l<=s)return e;let u=new Float32Array(Math.max(t,n)+2*r),d=1/(2*r+1),f=(t,n,i)=>{for(let a=0;a<n;a++)u[a+r]=e[t+a*i];let a=u[r],o=u[r+n-1];for(let e=0;e<r;e++)u[e]=a,u[r+n+e]=o;let s=0;for(let e=0;e<=2*r;e++)s+=u[e];for(let a=0;a<n;a++)e[t+a*i]=s*d,a+1<n&&(s+=u[a+2*r+1]-u[a])};for(let e=0;e<2;e++){for(let e=s;e<l;e++)f(e*t+o,c-o,1);for(let e=o;e<c;e++)f(s*t+e,l-s,t)}return e}function En(e){let t=[1/0,1/0,-1/0,-1/0];for(let n of e)for(let e=0;e<n.length;e+=2)t[0]=Math.min(t[0],n[e]),t[1]=Math.min(t[1],n[e+1]),t[2]=Math.max(t[2],n[e]),t[3]=Math.max(t[3],n[e+1]);return t}function H(e,t,n){let r=0,i=0;for(let n of t)r+=e[n*2],i+=e[n*2+1];return r/=t.length,i/=t.length,t.flatMap(t=>[r+(e[t*2]-r)*n,i+(e[t*2+1]-i)*n])}function Dn(e,t,n,r){let i=[],a=[];return t.forEach((o,s)=>{let c=Math.sin(Math.PI*s/(t.length-1)),[l,u]=L(e,o),d=r*(.06+.04*c),f=r*(.12+.5*c);i.push([l+n[0]*d,u+n[1]*d]),a.push([l+n[0]*f,u+n[1]*f])}),[...i,...a.reverse()].flat()}function On(e,t,n,r,i){let a=[];for(let o=0;o<16;o++){let s=o/16*Math.PI*2,c=Math.cos(s)*n,l=Math.sin(s)*i;a.push(e[0]+t[0]*c+r[0]*l,e[1]+t[1]*c+r[1]*l)}return a}function kn(e){let{ux:t,uy:n,width:r}=_n(e),i=R(L(e,33),L(e,133))||r*.2,a=R(L(e,263),L(e,362))||r*.2,o=hn(L(e,F.alaA),L(e,F.alaB)),s=R(L(e,F.alaA),L(e,F.alaB))||r*.25,c=L(e,F.noseBase),l=[(o[0]+c[0])/2,(o[1]+c[1])/2];return{skin:[H(e,F.oval,.93)],features:[H(e,F.eyeA,1.7),H(e,F.eyeB,1.7),H(e,F.browA,1.35),H(e,F.browB,1.35),H(e,F.lipsOuter,1.2),On(l,t,s*.68,n,s*.42)],underEye:[Dn(e,F.lowerLidA,n,i),Dn(e,F.lowerLidB,n,a)],lips:F.lipsOuter.flatMap(t=>L(e,t)),mouth:F.lipsInner.flatMap(t=>L(e,t)),width:r}}function An(e,t,n,{maxSide:r=384}={}){if(!e?.length)return null;let i=e.map(kn),a=1/0,o=1/0,s=-1/0,c=-1/0;for(let e of i){let t=e.skin[0];for(let e=0;e<t.length;e+=2)a=Math.min(a,t[e]),s=Math.max(s,t[e]),o=Math.min(o,t[e+1]),c=Math.max(c,t[e+1])}let l=(s-a)*.08+4;if(a=I(Math.floor(a-l),0,t),o=I(Math.floor(o-l),0,n),s=I(Math.ceil(s+l),0,t),c=I(Math.ceil(c+l),0,n),s-a<2||c-o<2)return null;let u=Math.min(1,r/Math.max(s-a,c-o)),d=Math.max(2,Math.ceil((s-a)*u)),f=Math.max(2,Math.ceil((c-o)*u)),p=e=>e.map((e,t)=>t%2?(e-o)*u:(e-a)*u),m=[0,1,2,3].map(()=>new Float32Array(d*f)),h=[[],[],[],[]],g=0;for(let e of i){let t=e.skin.map(p),n=e.underEye.map(p),r=p(e.lips),i=p(e.mouth);for(let e of t)V(m[0],d,f,e);for(let t of e.features)V(m[0],d,f,p(t),`cut`);for(let e of n)V(m[1],d,f,e);V(m[2],d,f,r),V(m[2],d,f,i,`cut`),V(m[3],d,f,i),h[0].push(...t),h[1].push(...n),h[2].push(r),h[3].push(i),g=Math.max(g,e.width*u)}[.02,.035,.006,.004].forEach((e,t)=>Tn(m[t],d,f,g*e,En(h[t])));let _=new Uint8Array(d*f*4);for(let e=0;e<d*f;e++)for(let t=0;t<4;t++)_[e*4+t]=Math.round(I(m[t][e],0,1)*255);return{rect:[a,o,s-a,c-o],width:d,height:f,data:_}}function jn(e){if(!e?.length)return null;let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e){let{center:e,width:o,height:s}=_n(a),c=Math.max(o*1.4,s*1.25),l=e[1]-s*.15;t=Math.min(t,e[0]-c),r=Math.max(r,e[0]+c),n=Math.min(n,l-c),i=Math.max(i,l+c*1.1)}let a=2**(Math.round(Math.log2(Math.max(8,r-t,i-n))*8)/8),o=a/32,s=Math.round((t+r)/2/o)*o,c=Math.round((n+i)/2/o)*o;return[s-a/2,c-a/2,a,a]}var Mn=e=>I(e*.012,1.5,10),Nn=640,Pn=(e,t)=>typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):Object.assign(document.createElement(`canvas`),{width:e,height:t});function Fn(e,t){let n=t.source,r=typeof n?.currentTime==`number`?n.currentTime:(e.sourceTime||0)/1e6;return{sec:r,key:`${t.key}|${t.version??``}|${t.dynamic?r.toFixed(4):``}|${e.sourceTime||0}`}}function In(e,t,n,r,i=null,a=0){e.save(),e.clearRect(0,0,n,r);let o=typeof ImageBitmap<`u`&&t instanceof ImageBitmap;o&&(e.translate(0,r),e.scale(1,-1));try{return i?e.drawImage(t,i[0],o?a-i[1]-i[3]:i[1],i[2],i[3],0,0,n,r):e.drawImage(t,0,0,n,r),!0}catch{return!1}finally{e.restore()}}function Ln(e){let t={face:!1,hair:!1};for(let n of e?.tracks||[])for(let e of n.clips){let n=x(e);t.face||=n.face,t.hair||=n.hair}return t}async function Rn(e){let t=Ln(e);return(await Promise.all([!t.face||rn(),!t.hair||un()])).every(Boolean)}function zn(e){let t=sn(t=>t===`ready`&&e()),n=pn(t=>t===`ready`&&e());return()=>{t(),n()}}var Bn=class{constructor(){this.entries=new Map,this.input=null,this.ctx=null}get(e,t){if(an()!==`ready`)return rn(),null;let{sec:n,key:r}=Fn(e,t),i=this.entries.get(e.clip.id);if(i&&i.frameKey===r)return i;let a=t.width||e.width||1,o=t.height||e.height||1,s=this._detect(t.source,a,o);if(!s)return i||null;let c=i&&i.W===a&&i.H===o&&Math.abs(i.sec-n)<.25,l=bn(c?i.tracks:null,s,n,c?Math.abs(n-i.sec):0);return i||(i={version:0,masks:null,masksFor:-1,plan:null,planFor:``,planVersion:0},this.entries.set(e.clip.id,i)),Object.assign(i,{frameKey:r,sec:n,W:a,H:o,tracks:l,faces:l.map(e=>e.pts)}),i.version++,i}_detect(e,t,n){let r=Math.min(1,Nn/Math.max(t,n)),i=Math.max(16,Math.round(t*r)),a=Math.max(16,Math.round(n*r));if(this.input||(this.input=Pn(i,a),this.ctx=this.input.getContext(`2d`,{willReadFrequently:!0})),(this.input.width!==i||this.input.height!==a)&&Object.assign(this.input,{width:i,height:a}),!In(this.ctx,e,i,a))return null;let o;try{o=cn(this.input)}catch(e){return console.error(e),null}if(!o)return null;for(let e of o)for(let r=0;r<e.length;r+=2)e[r]*=t,e[r+1]*=n;return o}masks(e){return e.masksFor!==e.version&&(e.masks=An(e.faces,e.W,e.H),e.masksFor=e.version),e.masks}plan(e,t,n){let r=`${e.version}|${n}|${Object.values(t).join(`,`)}`;return e.planFor!==r&&(e.plan=Cn(e.faces,t,n),e.planFor=r,e.planVersion++),e.plan}dispose(){this.entries.clear()}},Vn=class{constructor(){this.entries=new Map,this.input=null,this.ctx=null}get(e,t,n,r){if(dn()!==`ready`)return un(),null;let i=jn(n);if(!i)return null;let{sec:a,key:o}=Fn(e,t),c=`${o}|${i.join(`,`)}`,l=this.entries.get(e.clip.id);if(l&&l.frameKey===c)return l;if(this.input||(this.input=Pn(512,512),this.ctx=this.input.getContext(`2d`,{willReadFrequently:!0})),!In(this.ctx,t.source,512,512,i,r))return l||null;let u;try{u=mn(this.input)}catch(e){return console.error(e),l||null}if(!u)return l||null;let d=l&&Math.abs(l.sec-a)<.25&&l.raw.length===u.data.length,f=s(u.data,d&&l.rect.join()===i.join()?l.raw:null,40),p=Hn(this.ctx.getImageData(0,0,512,512).data,f,512,512,u.width,u.height);l||(l={version:0},this.entries.set(e.clip.id,l));let m=d?l.luma:null;return Object.assign(l,{frameKey:c,rect:i,sec:a,raw:f,w:u.width,h:u.height,luma:p==null?m??.25:m==null?p:m*.7+p*.3}),l.version++,l}dispose(){this.entries.clear()}};function Hn(e,t,n,r,i,a){let o=0,s=0;for(let c=0;c<a;c+=2){let l=Math.min(r-1,Math.floor((c+.5)*r/a));for(let r=0;r<i;r+=2){let a=t[c*i+r];if(a<64)continue;let u=Math.min(n-1,Math.floor((r+.5)*n/i)),d=(l*n+u)*4;o+=a*(.2126*e[d]+.7152*e[d+1]+.0722*e[d+2]),s+=a}}return s>5100?o/s/255:null}function Un(e,t,n,r,i,a,o,s,c,l,u){let d=e.gl;d.activeTexture(d.TEXTURE0+t);let f=e.textures.get(n);if(!f){let t=d.createTexture();d.bindTexture(d.TEXTURE_2D,t),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,u),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,u),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),f={tex:t,version:null,w:0,h:0,used:0},e.textures.set(n,f)}return d.bindTexture(d.TEXTURE_2D,f.tex),f.version!==r&&(e._rawUpload(()=>d.texImage2D(d.TEXTURE_2D,0,o,i,a,0,s,c,l)),Object.assign(f,{version:r,w:i,h:a})),f.used=e.frame,d.activeTexture(d.TEXTURE0),f}var Wn=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255);function Gn(e,t,n,r){let i=e.gl,a=n.kind===`media`&&n.clip&&r?.source,o=a?b(n.faceShape):null,s=a?ee(n.retouch):null,c=a&&y(n.hairColor),l=0,u=0,d=0;if(o||s||c){e._faceCache||=new Bn;let a=e._faceCache,f=a.get(n,r);if(f?.faces.length){let p=n.clip.id;if(e._set(t,`u_srcSize`,f.W,f.H),o){let r=a.plan(f,o,n.faceShape.faces);if(r.handles.length){Un(e,10,`faceWarp:${p}`,`${f.planVersion}|${f.planFor}`,r.handles.length,3,i.RGBA32F,i.RGBA,i.FLOAT,wn(r.handles),i.NEAREST);let n=new Float32Array(12),a=[0,0,0];r.groups.slice(0,3).forEach((e,t)=>{n.set([e.cx,e.cy,e.reach,e.first],t*4),a[t]=e.end});let o=t.u.get(`u_warpFace`);o&&i.uniform4fv(o,n),e._set(t,`u_warpEnd`,a),l=Math.min(3,r.groups.length)}}if(c){e._hairCache||=new Vn;let a=e._hairCache.get(n,r,f.faces,f.H);a&&(Un(e,9,`hair:${p}`,a.version,a.w,a.h,i.R8,i.RED,i.UNSIGNED_BYTE,a.raw,i.LINEAR),e._set(t,`u_hairRect`,a.rect),e._set(t,`u_hairTexel`,1/a.w,1/a.h),e._set(t,`u_hairColor`,Wn(n.hairColor.color)),e._set(t,`u_hairAmount`,n.hairColor.strength/100),e._set(t,`u_hairLuma`,a.luma),d=1)}if(s){let r=a.masks(f);r&&(Un(e,8,`faceMask:${p}`,f.masksFor,r.width,r.height,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,r.data,i.LINEAR),e._set(t,`u_faceMaskRect`,r.rect),e._set(t,`u_faceFix`,s),e._set(t,`u_lipColor`,Wn(n.retouch.lipColor||`#b8434e`)),e._set(t,`u_spotR`,Mn(Math.max(...f.faces.map(z)))),u=1)}}}e._seti(t,`u_warpTex`,10),e._seti(t,`u_faceMask`,8),e._seti(t,`u_hairTex`,9),e._seti(t,`u_warpFaces`,l),e._seti(t,`u_faceFixOn`,u),e._seti(t,`u_hairOn`,d)}var Kn=(e,t)=>typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):Object.assign(document.createElement(`canvas`),{width:e,height:t});function qn(e){return(e?.tracks||[]).some(e=>e.clips.some(e=>(e.cutout||v(e.retouch)||_(e)||e.colorTarget)&&!e.disabled))}async function Jn(e){return(await Promise.all([!qn(e)||ke(),Rn(e)])).every(Boolean)}function Yn(e){let t=Ne(t=>{t===`ready`&&e()}),n=zn(e);return()=>{t(),n()}}var Xn=class{constructor(){this.entries=new Map,this.input=null,this.inputCtx=null}_input(){return this.input||(this.input=Kn(256,256),this.inputCtx=this.input.getContext(`2d`,{willReadFrequently:!0})),this.inputCtx}get(e,t){if(De()!==`ready`)return ke(),null;let n=t.source,{sec:r,key:i}=Fn(e,t),a=e.cutout?.strokes||null,o=this.entries.get(e.clip.id);if(o&&o.frameKey===i)return o.strokes!==a&&this._compose(o,a,t),o;let c=this._segment(n);if(!c)return o||null;let l=o&&Math.abs(o.sec-r)<.2&&o.raw.length===c.data.length,u=s(c.data,l?o.raw:null,e.cutout?.smooth??m.smooth);return o||(o={canvas:Kn(c.width,c.height),version:0,img:null,ov:null,ovFor:null},this.entries.set(e.clip.id,o)),Object.assign(o,{frameKey:i,raw:u,sec:r,w:c.width,h:c.height}),this._compose(o,a,t),o}_segment(e){if(!In(this._input(),e,256,256))return null;try{return je(this.input)}catch(e){return console.error(e),null}}_compose(e,t,n){let r=e.raw;t?.length&&((e.ovFor!==t||e.ov?.length!==e.w*e.h)&&(e.ov=o(t,e.w,e.h,(n.width||1)/(n.height||1)),e.ovFor=t),r=a(Uint8ClampedArray.from(e.raw),e.ov)),(e.canvas.width!==e.w||e.canvas.height!==e.h)&&Object.assign(e.canvas,{width:e.w,height:e.h}),(!e.img||e.img.width!==e.w||e.img.height!==e.h)&&(e.img=new ImageData(e.w,e.h),e.img.data.fill(255));let i=e.img.data;for(let e=0;e<r.length;e++)i[e*4+3]=r[e];e.canvas.getContext(`2d`).putImageData(e.img,0,0),e.strokes=t,e.version++}dispose(){this.entries.clear()}};function Zn(e,t,n){let r;if(e.personMatte?r=e.personMatte(t,n):(e._matteCache||=new Xn,r=e._matteCache.get(t,n)),!r)return De()===`failed`?void 0:null;let i=e.gl;i.activeTexture(i.TEXTURE0+7);let a=e._texture({key:`matte:${t.clip.id}`,source:r.canvas,width:r.canvas.width,height:r.canvas.height,version:r.version});return i.activeTexture(i.TEXTURE0),a?{...a,mw:r.canvas.width,mh:r.canvas.height}:void 0}function Qn(e,t,n,r){let i=0,a=n.kind===`media`&&n.clip&&r?.source,o=!!(a&&n.cutout),s=a?v(n.retouch):null,c=a&&$n[n.colorTarget]||0;if(o||s||c){let a=Zn(e,n,r);if(a){i=1;let[r,o]=w(n.cutout);e._set(t,`u_matteWin`,r,o),e._set(t,`u_matteTexel`,1/a.mw,1/a.mh)}else a===null&&(i=2)}e._seti(t,`u_matteTex`,7),e._seti(t,`u_matteOn`,i),e._seti(t,`u_cutOn`,+!!o),e._seti(t,`u_retouchOn`,+!!s),s&&e._set(t,`u_retouch`,s),e._seti(t,`u_colorTarget`,c),e._seti(t,`u_maskColor`,a&&n.maskUse===`color`&&n.masks?.length?1:0),Gn(e,t,n,r)}var $n={person:1,background:2},er=new Set;function tr(e,t){if(er.has(t))return null;let n=Ze(t);if(!n)return null;try{return e._program(`fx:${t}`,D,n)}catch(e){return er.add(t),console.warn(`Effect ${t} is unavailable:`,e?.message||e),null}}function nr(e,t,n,r,i,{time:a=0,duration:o=0}={},s=null){if(f(t,n)||p(t)&&!s)return!1;let c=tr(e,t);if(!c)return!1;let l=e.gl;e._into(i),l.disable(l.BLEND);let u=e._use(c);e._bindTex(0,r.tex),e._seti(u,`u_tex`,0),e._set(u,`u_texel`,1/r.w,1/r.h),e._set(u,`u_res`,r.w,r.h),e._set(u,`u_time`,a),e._set(u,`u_dur`,o);for(let[r,i]of d(t,n))e._set(u,r,i);return s&&(e._bindTex(7,s.tex),e._seti(u,`u_person`,7),e._set(u,`u_personRect`,s.rect),e._set(u,`u_personFlip`,s.flip[0],s.flip[1]),e._set(u,`u_personTexel`,s.texel[0],s.texel[1]),e._bindTex(0,r.tex)),e._fullPass(u),!0}function rr(e,t,n,r){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texStorage2D(e.TEXTURE_2D,1,r?e.RGBA16F:e.RGBA8,t,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),{fb:a,tex:i,w:t,h:n,used:0}}function U(e,t,n,r,i=!1){let a=e.clipFxPool||=new Map,o=`${t}:${n}x${r}${i?`f`:``}`,s=a.get(o);if(!s){for(let[t,n]of a)e.frame-n.used>90&&(e.gl.deleteFramebuffer(n.fb),e.gl.deleteTexture(n.tex),a.delete(t));s=rr(e.gl,n,r,i),a.set(o,s)}return s.used=e.frame,s}function ir(e,{lost:t=!1}={}){let n=e.clipFxPool;if(n){if(!t)for(let t of n.values())e.gl.deleteFramebuffer(t.fb),e.gl.deleteTexture(t.tex);e.clipFxPool=null}}function ar(e,t,n){if(t.kind!==`media`||!t.clip)return null;let r=Zn(e,t,n);if(!r)return null;let i=t.crop||{l:0,t:0,r:0,b:0},a=[i.l,i.b,Math.max(.05,1-i.l-i.r),Math.max(.05,1-i.t-i.b)];return{tex:r.tex,rect:a,flip:[+!!t.flipH,+!!t.flipV],texel:[1/r.mw/a[2],1/r.mh/a[3]]}}var or=e=>2**(Math.ceil(Math.log2(Math.max(.001,e))*2)/2);function sr(e,t,n){let r=t.effects;if(!r?.length)return e._drawLayer(t,n);let i=e.resolve(t);if(!i||!i.source)return!1;let a=e.layerBox(t,i),o=Math.abs(t.scale);if(!(o>1e-4)||!(a.w>0)||!(a.h>0))return!1;let s=a.w/o,c=a.h/o,l=e.width/e.projW,u=or(o)*l,d=2*Math.max(e.width,e.height)/Math.max(s,c);u=Math.min(u,d);let f=Math.max(2,Math.round(s*u)),m=Math.max(2,Math.round(c*u)),h=e.gl,g=e.bound??null,_=U(e,`a`,f,m),v=U(e,`b`,f,m);e._into(_),h.disable(h.BLEND),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.enable(h.BLEND),h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA);let y={projW:e.projW,projH:e.projH,resolve:e.resolve};e.projW=s,e.projH=c,e.resolve=()=>i;let b;try{b=e._drawLayer({...t,x:0,y:0,scale:1,rotation:0,opacity:1,blur:0},n)}finally{e.projW=y.projW,e.projH=y.projH,e.resolve=y.resolve}if(!b)return e._into(g),!1;let x={time:(t.fxTime||0)/1e6,duration:(t.fxDur||0)/1e6},S=r.some(e=>p(e.id))?ar(e,t,i):null;for(let t of r)nr(e,t.id,t.params,_,v,x,S)&&([_,v]=[v,_]);e._into(g),h.enable(h.BLEND),h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA);let C=e._use(e._program(`clipfx-place`,Be,Qe));return e._set(C,`u_matrix`,e._matrix(a.cx,a.cy,a.w,a.h,t.rotation)),e._set(C,`u_uvRect`,[0,0,1,1]),e._set(C,`u_flip`,0,0),e._set(C,`u_opacity`,t.opacity),e._set(C,`u_texel`,1/f,1/m),e._set(C,`u_blur`,t.blur>0?t.blur*4*Math.max(1,f/640):0),e._bindTex(0,_.tex),e._seti(C,`u_tex`,0),h.bindVertexArray(e.vao),e._draw(),!0}var cr=new Map;function lr(e){return cr.has(e.id)||cr.set(e.id,u({hsl:e.hsl||null,curves:e.curves||null})),cr.get(e.id)}function ur(e,t,n){if(!(n>0))return e;let r=lr(t);if(!r)return e;let i=e?{...e}:{hsl:null,wheels:null,curves:null,curvesKey:``,lut:null};if(r.hsl){let t=new Float32Array(24);for(let i=0;i<24;i++)t[i]=(e?.hsl?.[i]||0)+r.hsl[i]*n;i.hsl=t}if(r.curves&&!i.curves){let e=Math.round(n*100)/100,a={};for(let[t,n]of Object.entries(r.curves))a[t]=n.map(([t,n])=>[t,t+(n-t)*e]);i.curves=a,i.curvesKey=`filter:${t.id}:${e}`}return i}var dr=.002,fr=.004,pr=1.5,mr=.08,hr=.01,gr=[.5,2],_r=[.04,.12];function vr(e,t,n=640){let r=Math.min(1,n/Math.max(e,t)),i=Math.max(8,Math.round(e*r)),a=Math.max(8,Math.round(t*r)),o=[{w:i,h:a}];for(;Math.max(i,a)>48;)i=Math.ceil(i/2),a=Math.ceil(a/2),o.push({w:i,h:a});return o}var yr=(e,t)=>Math.max(e,t)<=160?4:1,W=e=>Number.isInteger(e)?`${e}.0`:String(e),G=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;
`,br=`
uniform sampler2D u_lum;
uniform vec2 u_size;
uniform int u_swap;
float la(vec2 p) { vec2 v = texture(u_lum, (p + 0.5) / u_size).rg; return u_swap == 1 ? v.y : v.x; }
float lb(vec2 p) { vec2 v = texture(u_lum, (p + 0.5) / u_size).rg; return u_swap == 1 ? v.x : v.y; }
`,xr=`${G}
uniform sampler2D u_a;
uniform sampler2D u_b;
uniform float u_t;
void main() { outColor = mix(texture(u_a, v_uv), texture(u_b, v_uv), u_t); }`,Sr=`${G}
uniform sampler2D u_a;
uniform sampler2D u_b;
uniform vec2 u_texel;
const vec3 Y = vec3(0.2126, 0.7152, 0.0722);
vec2 tap(vec2 uv) { return vec2(dot(texture(u_a, uv).rgb, Y), dot(texture(u_b, uv).rgb, Y)); }
void main() {
  vec2 d = 0.25 * u_texel;
  vec2 s = tap(v_uv - d) + tap(v_uv + d) + tap(v_uv + vec2(d.x, -d.y)) + tap(v_uv + vec2(-d.x, d.y));
  outColor = vec4(0.25 * s, 0.0, 1.0);
}`,Cr=`${G}
uniform sampler2D u_tex;
uniform vec2 u_srcTexel;
void main() {
  vec2 d = 0.5 * u_srcTexel;
  outColor = 0.25 * (texture(u_tex, v_uv - d) + texture(u_tex, v_uv + d) + texture(u_tex, v_uv + vec2(d.x, -d.y)) + texture(u_tex, v_uv + vec2(-d.x, d.y)));
}`,wr=25,Tr=`${G}${br}
uniform sampler2D u_coarse;
uniform vec2 u_coarseSize;
uniform int u_hasCoarse;
uniform int u_radius;
float A[${wr}];
float cost(vec2 p, vec2 m) {
  float s = 0.0;
  int k = 0;
  for (int oy = -2; oy <= 2; oy++) {
    for (int ox = -2; ox <= 2; ox++) {
      s += abs(A[k] - lb(p + vec2(float(ox), float(oy)) + m));
      k++;
    }
  }
  return s / ${W(wr)};
}
vec2 coarseAt(vec2 q, vec2 r) { return texture(u_coarse, (q + 0.5) / u_coarseSize).rg * r; }
void main() {
  vec2 p = gl_FragCoord.xy - 0.5;
  int k = 0;
  for (int oy = -2; oy <= 2; oy++) {
    for (int ox = -2; ox <= 2; ox++) {
      A[k] = la(p + vec2(float(ox), float(oy)));
      k++;
    }
  }
  vec2 pred = vec2(0.0);
  vec2 best = pred;
  float bestC = cost(p, pred);
  float bestS = bestC;
  if (u_hasCoarse == 1) {
    vec2 r = u_size / u_coarseSize;
    vec2 c = (p + 0.5) / r - 0.5;
    pred = coarseAt(c, r);
    best = pred;
    bestC = cost(p, pred);
    bestS = bestC;
    vec2 nb[4] = vec2[4](vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0));
    for (int i = 0; i < 4; i++) {
      vec2 m = coarseAt(c + nb[i], r);
      float cc = cost(p, m);
      float s = cc + ${W(dr)} * length(m - pred);
      if (s < bestS) { best = m; bestC = cc; bestS = s; }
    }
  }
  vec2 base = best;
  for (int dy = -4; dy <= 4; dy++) {
    for (int dx = -4; dx <= 4; dx++) {
      if (abs(dx) > u_radius || abs(dy) > u_radius || (dx == 0 && dy == 0)) continue;
      vec2 m = base + vec2(float(dx), float(dy));
      float cc = cost(p, m);
      float s = cc + ${W(dr)} * length(m - pred);
      if (s < bestS) { best = m; bestC = cc; bestS = s; }
    }
  }
  outColor = vec4(best, bestC, 1.0);
}`,Er=`${G}${br}
uniform sampler2D u_flow;
void main() {
  vec2 p = gl_FragCoord.xy - 0.5;
  vec2 u = texture(u_flow, (p + 0.5) / u_size).rg;
  float hxx = 0.0, hxy = 0.0, hyy = 0.0, bx = 0.0, by = 0.0;
  vec2 ex = vec2(1.0, 0.0);
  vec2 ey = vec2(0.0, 1.0);
  for (int oy = -2; oy <= 2; oy++) {
    for (int ox = -2; ox <= 2; ox++) {
      vec2 q = p + vec2(float(ox), float(oy));
      float e = lb(q + u) - la(q);
      float gx = 0.25 * (la(q + ex) - la(q - ex) + lb(q + u + ex) - lb(q + u - ex));
      float gy = 0.25 * (la(q + ey) - la(q - ey) + lb(q + u + ey) - lb(q + u - ey));
      hxx += gx * gx;
      hxy += gx * gy;
      hyy += gy * gy;
      bx += gx * e;
      by += gy * e;
    }
  }
  float a = hxx + ${W(fr)};
  float c = hyy + ${W(fr)};
  float det = a * c - hxy * hxy;
  vec2 d = det > 1e-12 ? vec2(-(c * bx - hxy * by), -(a * by - hxy * bx)) / det : vec2(0.0);
  float len = length(d);
  if (len > 1.0) d /= len;
  u += d;
  float s = 0.0;
  for (int oy = -2; oy <= 2; oy++) {
    for (int ox = -2; ox <= 2; ox++) {
      vec2 q = p + vec2(float(ox), float(oy));
      s += abs(la(q) - lb(q + u));
    }
  }
  outColor = vec4(u, s / ${W(wr)}, 1.0);
}`,Dr=`${G}${br}
uniform sampler2D u_flow;
float lumAt(ivec2 q) { vec2 v = texelFetch(u_lum, q, 0).rg; return u_swap == 1 ? v.y : v.x; }
void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  ivec2 hi = ivec2(u_size) - 1;
  float l0 = lumAt(p);
  vec3 acc = vec3(0.0);
  float sw = 0.0;
  for (int oy = -2; oy <= 2; oy++) {
    for (int ox = -2; ox <= 2; ox++) {
      ivec2 n = clamp(p + ivec2(ox, oy), ivec2(0), hi);
      vec3 fl = texelFetch(u_flow, n, 0).rgb;
      float dl = lumAt(n) - l0;
      float w = exp(-float(ox * ox + oy * oy) / ${W(2*pr**2)} - dl * dl / ${W(2*mr**2)}) / (fl.b + ${W(hr)});
      acc += w * fl;
      sw += w;
    }
  }
  outColor = vec4(acc / sw, 1.0);
}`,Or=`${G}${br}
uniform sampler2D u_fwd;
uniform sampler2D u_bwd;
uniform float u_t;
vec2 F(vec2 q) { return texture(u_fwd, (q + 0.5) / u_size).rg; }
vec2 G(vec2 q) { return texture(u_bwd, (q + 0.5) / u_size).rg; }
float endError(vec2 p, vec2 m) {
  vec2 pa = p - u_t * m;
  vec2 pb = p + (1.0 - u_t) * m;
  float s = 0.0;
  for (int oy = -1; oy <= 1; oy++) {
    for (int ox = -1; ox <= 1; ox++) {
      vec2 o = vec2(float(ox), float(oy));
      s += abs(la(pa + o) - lb(pb + o));
    }
  }
  return s / 9.0;
}
void main() {
  vec2 p = gl_FragCoord.xy - 0.5;
  float t = u_t;
  vec2 best = vec2(0.0);
  float err = 1e9;
  vec2 m = F(p);
  for (int i = 0; i <= 3; i++) {
    if (i > 0) m = F(p - t * m);
    float e = endError(p, m);
    if (e < err) { err = e; best = m; }
  }
  m = -G(p);
  for (int i = 0; i <= 3; i++) {
    if (i > 0) m = -G(p + (1.0 - t) * m);
    float e = endError(p, m);
    if (e < err) { err = e; best = m; }
  }
  vec2 pa = p - t * best;
  vec2 pb = p + (1.0 - t) * best;
  vec2 fa = F(pa);
  float occA = smoothstep(${W(gr[0])}, ${W(gr[1])}, length(fa + G(pa + fa)));
  vec2 gb = G(pb);
  float occB = smoothstep(${W(gr[0])}, ${W(gr[1])}, length(gb + F(pb + gb)));
  float wa = (1.0 - t) * (1.0 - occB);
  float wb = t * (1.0 - occA);
  if (wa + wb < 1e-4) { wa = 1.0 - t; wb = t; }
  float fallback = smoothstep(${W(_r[0])}, ${W(_r[1])}, err) * (1.0 - abs(occA - occB));
  outColor = vec4(best, wa / (wa + wb), fallback);
}`,kr=`${G}
uniform sampler2D u_a;
uniform sampler2D u_b;
uniform sampler2D u_pick;
uniform vec2 u_flowSize;
uniform float u_t;
void main() {
  vec4 pk = texture(u_pick, v_uv);
  vec2 m = pk.rg / u_flowSize;
  vec4 warped = mix(texture(u_b, v_uv + (1.0 - u_t) * m), texture(u_a, v_uv - u_t * m), pk.b);
  vec4 plain = mix(texture(u_a, v_uv), texture(u_b, v_uv), u_t);
  outColor = mix(warped, plain, pk.a);
}`;function Ar(e){return!!e.gl.getExtension(`EXT_color_buffer_float`)}function K(e,t,n,r,i,a){let o=e._use(e._program(t,D,n));e._into(r),a.forEach(([t,n],r)=>{e._bindTex(r,n),e._seti(o,t,r)});for(let[t,n]of Object.entries(i))typeof n==`number`&&t.startsWith(`i:`)?e._seti(o,t.slice(2),n):Array.isArray(n)?e._set(o,t,n[0],n[1]):e._set(o,t,n);e._fullPass(o)}function jr(e,t,n,r){let i=null;for(let a=t.length-1;a>=0;a--){let{w:o,h:s}=t[a],c=[o,s],l=n[a].tex,u=U(e,`slowmo-t0`,o,s,!0),d=U(e,`slowmo-t1`,o,s,!0);K(e,`slowmo-match`,Tr,u,{u_size:c,"i:u_swap":r,"i:u_hasCoarse":+!!i,"i:u_radius":yr(o,s),u_coarseSize:i?[i.w,i.h]:[1,1]},[[`u_lum`,l],[`u_coarse`,i?i.tex:l]]);for(let t=0;t<(a===0?2:1);t++)K(e,`slowmo-refine`,Er,d,{u_size:c,"i:u_swap":r},[[`u_lum`,l],[`u_flow`,u.tex]]),[u,d]=[d,u];let f=U(e,`slowmo-f${a}-${r}`,o,s,!0);K(e,`slowmo-smooth`,Dr,f,{u_size:c,"i:u_swap":r},[[`u_lum`,l],[`u_flow`,u.tex]]),i=f}return i}function Mr(e,t,n,r,i,a,o){let s=vr(r,i),c=s.map((t,n)=>U(e,`slowmo-l${n}`,t.w,t.h,!0));K(e,`slowmo-luma`,Sr,c[0],{u_texel:[1/s[0].w,1/s[0].h]},[[`u_a`,t],[`u_b`,n]]);for(let t=1;t<s.length;t++)K(e,`slowmo-down`,Cr,c[t],{u_srcTexel:[1/s[t-1].w,1/s[t-1].h]},[[`u_tex`,c[t-1].tex]]);let l=jr(e,s,c,0),u=jr(e,s,c,1),{w:d,h:f}=s[0],p=U(e,`slowmo-pick`,d,f,!0);K(e,`slowmo-pick`,Or,p,{u_size:[d,f],"i:u_swap":0,u_t:a},[[`u_lum`,c[0].tex],[`u_fwd`,l.tex],[`u_bwd`,u.tex]]),K(e,`slowmo-warp`,kr,o,{u_flowSize:[d,f],u_t:a},[[`u_a`,t],[`u_b`,n],[`u_pick`,p.tex]])}function Nr(e,t){let{mode:n,frac:r,next:i}=t.between,a=e._texture({...t,between:null});if(!a)return null;let o=e.gl,s=o.getParameter(o.ACTIVE_TEXTURE),c=e._texture(i);if(!c||c.w!==a.w||c.h!==a.h||!(a.w>1&&a.h>1))return o.bindTexture(o.TEXTURE_2D,a.tex),a;let l=a.w,u=a.h,d=n===`flow`&&Ar(e),f=U(e,`slowmo-out:${t.key}`,l,u),p=`${d?`flow`:`blend`}|${r}|${a.version}|${c.version}`,m=e.slowmoCache||=new Map,h=m.get(t.key);if(!h||h.target!==f||h.sig!==p){let n=e._bound||null,i=o.isEnabled(o.BLEND);if(o.disable(o.BLEND),d?Mr(e,a.tex,c.tex,l,u,r,f):K(e,`slowmo-blend`,xr,f,{u_t:r},[[`u_a`,a.tex],[`u_b`,c.tex]]),e._into(n),i&&o.enable(o.BLEND),m.set(t.key,{target:f,sig:p}),m.size>16)for(let e of[...m.keys()].slice(0,m.size-16))m.delete(e)}return o.activeTexture(s),o.bindTexture(o.TEXTURE_2D,f.tex),{tex:f.tex,w:l,h:u,version:p,ok:!0,used:e.frame}}var Pr=new Map(te.map(e=>[e.id,e])),Fr=[`brightness`,`contrast`,`saturation`,`exposure`,`temperature`,`tint`,`highlights`,`shadows`,`fade`,`vignette`,`grain`,`sharpen`,`vibrance`,`whites`,`blacks`,`brilliance`,`clarity`],Ir=4,Lr=5;function Rr(e){let t=parseInt(String(e||`#000000`).slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function zr(e,t,n=null){let r={mono:0,splitAmount:0,shadowTint:[0,0,0],highlightTint:[1,1,1],ext:u(n)},i=c(e,n);for(let e of Fr)r[e]=i?.[e]||0;if(t){let e=Pr.get(t.id),n=(t.intensity??100)/100;if(e){for(let t of Fr)e.p[t]&&(r[t]+=e.p[t]*n);e.p.mono&&(r.mono=e.p.mono*n),e.p.splitAmount&&(r.splitAmount=e.p.splitAmount*n,e.p.shadowTint&&(r.shadowTint=Rr(e.p.shadowTint)),e.p.highlightTint&&(r.highlightTint=Rr(e.p.highlightTint))),(e.hsl||e.curves)&&(r.ext=ur(r.ext,e,n))}}return r}var Br=zr(null,null),Vr=class{constructor(e,{resolve:t,preserveDrawingBuffer:n=!1}={}){this.canvas=e,this.resolve=t;let r=e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:n,powerPreference:`high-performance`});if(!r)throw Error(`WebGL2 is not available`);this.gl=r,this.programs=new Map,this.textures=new Map,this.frame=0,this.lost=!1,this.width=0,this.height=0,this.projW=1920,this.projH=1080,e.addEventListener&&(e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.lost=!0}),e.addEventListener(`webglcontextrestored`,()=>{this.lost=!1,this.programs.clear(),this.textures.clear(),this.targets=null,ir(this,{lost:!0}),this._init()})),this._init()}_init(){let e=this.gl;this.quad=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quad),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-.5,-.5,.5,-.5,-.5,.5,.5,.5]),e.STATIC_DRAW),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),this.curveTextures=new Map,this.lutTextures=new Map,this.blankCurves=this._floatTexture2D(new Float32Array([0,0,0,0,1,1,1,1]),2),this.blankLut=this._floatTexture3D(new Float32Array(32).fill(0),2),this._bindLookups(this.blankCurves,this.blankLut)}_rawUpload(e){let t=this.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_ALIGNMENT,1);try{e()}finally{t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_ALIGNMENT,4)}}_floatTexture2D(e,t,n=null){let r=this.gl;return n||=r.createTexture(),r.activeTexture(r.TEXTURE0+Ir),r.bindTexture(r.TEXTURE_2D,n),this._rawUpload(()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,t,1,0,r.RGBA,r.FLOAT,e)),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),n}_floatTexture3D(e,t,n=null){let r=this.gl;return n||=r.createTexture(),r.activeTexture(r.TEXTURE0+Lr),r.bindTexture(r.TEXTURE_3D,n),this._rawUpload(()=>r.texImage3D(r.TEXTURE_3D,0,r.RGBA16F,t,t,t,0,r.RGBA,r.FLOAT,e)),r.texParameteri(r.TEXTURE_3D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_3D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_3D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_3D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_3D,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),n}_bindLookups(e,t){let n=this.gl;n.activeTexture(n.TEXTURE0+Ir),n.bindTexture(n.TEXTURE_2D,e),n.activeTexture(n.TEXTURE0+Lr),n.bindTexture(n.TEXTURE_3D,t),n.activeTexture(n.TEXTURE0)}_curvesTexture(e){let t=this.curveTextures.get(e.curvesKey);if(!t){if(this.curveTextures.size>=32){let e=[...this.curveTextures.entries()].sort((e,t)=>e[1].used-t[1].used)[0];this.gl.deleteTexture(e[1].tex),this.curveTextures.delete(e[0])}t={tex:this._floatTexture2D(h(e.curves),256),used:0},this.curveTextures.set(e.curvesKey,t)}return t.used=this.frame,t.tex}_lutTexture(e){let t=this.lutTextures.get(e.id);if(t&&t.version===e.version)return t.used=this.frame,t.tex;let n=this._floatTexture3D(e.data,e.size,t?.tex);return t={tex:n,version:e.version,used:this.frame},this.lutTextures.set(e.id,t),n}resize(e,t,n,r){e=Math.max(2,Math.round(e)),t=Math.max(2,Math.round(t)),this.projW=n,this.projH=r,(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.canvas.width=e,this.canvas.height=t,this._freeTargets())}_freeTargets(){if(!this.targets)return;let e=this.gl;for(let t of Object.values(this.targets))e.deleteFramebuffer(t.fb),e.deleteTexture(t.tex);this.targets=null}_target(e,t=1){this.targets||={};let n=Math.max(2,Math.round(this.width*t)),r=Math.max(2,Math.round(this.height*t)),i=this.targets[e];if(i&&i.w===n&&i.h===r)return i;let a=this.gl;i&&(a.deleteFramebuffer(i.fb),a.deleteTexture(i.tex));let o=a.createTexture();a.bindTexture(a.TEXTURE_2D,o),a.texStorage2D(a.TEXTURE_2D,1,a.RGBA8,n,r),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);let s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,o,0),i={fb:s,tex:o,w:n,h:r},this.targets[e]=i,i}_program(e,t,n){let r=this.programs.get(e);if(r)return r;let i=this.gl,a=(t,n)=>{let r=i.createShader(t);if(i.shaderSource(r,n),i.compileShader(r),!i.getShaderParameter(r,i.COMPILE_STATUS)){let t=i.getShaderInfoLog(r);throw i.deleteShader(r),Error(`Shader ${e}: ${t}`)}return r},o=i.createProgram();if(i.attachShader(o,a(i.VERTEX_SHADER,t)),i.attachShader(o,a(i.FRAGMENT_SHADER,n)),i.bindAttribLocation(o,0,`a_pos`),i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS))throw Error(`Program ${e}: ${i.getProgramInfoLog(o)}`);let s=new Map,c=i.getProgramParameter(o,i.ACTIVE_UNIFORMS);for(let e=0;e<c;e++){let t=i.getActiveUniform(o,e);s.set(t.name.replace(/\[0\]$/,``),i.getUniformLocation(o,t.name))}return r={prog:o,u:s},this.programs.set(e,r),r}_use(e){return this.gl.useProgram(e.prog),e}_set(e,t,...n){let r=e.u.get(t);if(r==null)return;let i=this.gl,a=n[0];Array.isArray(a)||a instanceof Float32Array?a.length===9?i.uniformMatrix3fv(r,!1,a):a.length===4?i.uniform4fv(r,a):a.length===3?i.uniform3fv(r,a):a.length===2&&i.uniform2fv(r,a):n.length===2?i.uniform2f(r,n[0],n[1]):typeof a==`boolean`?i.uniform1i(r,+!!a):i.uniform1f(r,a)}_seti(e,t,n){let r=e.u.get(t);r!=null&&this.gl.uniform1i(r,n)}_bindTex(e,t){let n=this.gl;n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}_draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}_into(e){let t=this.gl;this._bound=e||null,this.bound=this._bound,t.bindFramebuffer(t.FRAMEBUFFER,e?e.fb:null),t.viewport(0,0,e?e.w:this.width,e?e.h:this.height)}_texture(e){if(e.between)return Nr(this,e);let t=this.gl,n=this.textures.get(e.key),r=!n||e.dynamic||n.version!==e.version;if(!n){let r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n={tex:r,version:null,w:0,h:0,used:0},this.textures.set(e.key,n)}if(t.bindTexture(t.TEXTURE_2D,n.tex),r)try{t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e.source),n.version=e.version,n.w=e.width,n.h=e.height,n.ok=!0}catch{if(!n.ok)return null}return n.used=this.frame,n}_gcTextures(){if(this.frame%120==0)for(let[e,t]of this.textures)this.frame-t.used>240&&(this.gl.deleteTexture(t.tex),this.textures.delete(e))}releaseTexture(e){let t=this.textures.get(e);t&&(this.gl.deleteTexture(t.tex),this.textures.delete(e))}_matrix(e,t,n,r,i){let a=this.projW,o=this.projH,s=i*Math.PI/180,c=Math.cos(s),l=Math.sin(s);return new Float32Array([2*n*c/a,-2*n*l/o,0,2*r*l/a,2*r*c/o,0,2*e/a-1,1-2*t/o,1])}layerBox(e,t){let n=this.projW,r=this.projH,i,a;if(e.kind===`media`){let o=e.crop||{l:0,t:0,r:0,b:0},s=(t?.width||e.width)*(1-o.l-o.r),c=(t?.height||e.height)*(1-o.t-o.b),l=Math.min(n/s,r/c);i=s*l,a=c*l}else i=t?.projW||100,a=t?.projH||100;return{cx:n/2+e.x*n,cy:r/2+e.y*r,w:i*e.scale*(e.sx??1),h:a*e.scale*(e.sy??1)}}_setGrade(e,t,n){for(let n of Fr)this._set(e,`u_${n}`,t[n]);this._set(e,`u_mono`,t.mono),this._set(e,`u_splitAmount`,t.splitAmount),this._set(e,`u_shadowTint`,t.shadowTint),this._set(e,`u_highlightTint`,t.highlightTint),this._set(e,`u_time`,n),this._seti(e,`u_curves`,Ir),this._seti(e,`u_lut`,Lr);let r=t.ext;if(this._seti(e,`u_hslOn`,+!!r?.hsl),r?.hsl){let t=e.u.get(`u_hsl`);t&&this.gl.uniform3fv(t,r.hsl)}this._seti(e,`u_wheelsOn`,+!!r?.wheels),r?.wheels&&(this._set(e,`u_lift`,r.wheels.lift),this._set(e,`u_gamma`,r.wheels.gamma),this._set(e,`u_gain`,r.wheels.gain),this._set(e,`u_offset`,r.wheels.offset));let i=r?.lut?at(r.lut.id):null;if(this._seti(e,`u_curvesOn`,+!!r?.curves),this._seti(e,`u_lutOn`,+!!i),!r?.curves&&!i)return;let a=r.curves?this._curvesTexture(r):this.blankCurves,o=i?this._lutTexture(i):this.blankLut;i&&(this._set(e,`u_lutSize`,i.size),this._set(e,`u_lutMix`,r.lut.mix),this._set(e,`u_lutMin`,i.domainMin),this._set(e,`u_lutMax`,i.domainMax)),this._bindLookups(a,o)}_drawLayer(e,t){if(e.extras&&!e.inner)return tn(this,e,t);let n=this.resolve(e);if(!n||!n.source)return!1;let r=this._texture(n);if(!r)return!1;let i=this.gl,a=this._use(this._program(`layer`,Be,Ue)),o=this.layerBox(e,n);this._set(a,`u_matrix`,this._matrix(o.cx,o.cy,o.w,o.h,e.rotation));let s=e.kind===`media`&&e.crop?e.crop:{l:0,t:0,r:0,b:0};this._set(a,`u_uvRect`,[s.l,s.b,1-s.l-s.r,1-s.t-s.b]),this._set(a,`u_flip`,+!!e.flipH,+!!e.flipV),this._set(a,`u_opacity`,e.opacity),this._set(a,`u_texel`,1/Math.max(1,r.w),1/Math.max(1,r.h)),this._set(a,`u_blur`,e.blur>0?e.blur*4*Math.max(1,r.w/640):0),this._seti(a,`u_premultiplied`,0);let c=e.kind===`media`?zr(e.adjust,e.filter,e.grade):Br;this._setGrade(a,c,t);let l=e.chroma;return this._seti(a,`u_chroma`,l&&l.strength>0?1:0),l&&(this._set(a,`u_keyColor`,Rr(l.color)),this._set(a,`u_keyStrength`,l.strength),this._set(a,`u_keySpill`,l.spill||0)),$t(this,a,e,o),Qn(this,a,e,n),this._bindTex(0,r.tex),this._seti(a,`u_tex`,0),i.bindVertexArray(this.vao),this._draw(),!0}_transitionProgram(e){if(this.brokenTransitions||=new Set,!this.brokenTransitions.has(e))try{return this._program(`tr:${e}`,D,tt(e))}catch(t){this.brokenTransitions.add(e),console.warn(`Transition ${e} is unavailable:`,t?.message||t)}return this._program(`tr:mix`,D,tt(`mix`))}_drawVisual(e,t){return e.effects?.length?sr(this,e,t):this._drawLayer(e,t)}_fullPass(e){return this.gl.bindVertexArray(this.vao),this._draw(),e}_copy(e,t=1){let n=this._use(this._program(`copy`,D,We));this._bindTex(0,e),this._seti(n,`u_tex`,0),this._set(n,`u_opacity`,t),this._fullPass(n)}_blurInto(e,t,n,r){let i=this.gl,a=this._use(this._program(`blur`,D,Ge));this._seti(a,`u_tex`,0);let o=e;for(let e=0;e<3;e++)this._into(t),i.disable(i.BLEND),this._bindTex(0,o),this._set(a,`u_dir`,r/t.w,0),this._fullPass(a),this._into(n),this._bindTex(0,t.tex),this._set(a,`u_dir`,0,r/t.h),this._fullPass(a),o=n.tex;return n}_background(e,t,n){let r=this.gl,i=t.background||{type:`color`,color:`#000000`},a=this._target(`acc0`);this._into(a);let[o,s,c]=Rr(i.color);if(i.type!==`blur`){r.clearColor(o,s,c,1),r.clear(r.COLOR_BUFFER_BIT);return}r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT);let l=e.find(e=>e.kind===`media`)||e.find(e=>e.kind===`transition`)?.from;if(!l)return;let u=this._target(`bgSmall`,.25);this._into(u),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.disable(r.BLEND);let d=this.resolve(l);if(!d?.source)return;let f=this.projW,p=this.projH,m=Math.max(f/d.width,p/d.height),h={...l,x:0,y:0,rotation:0,opacity:1,blur:0,scale:1,sx:1,sy:1,masks:null,extras:null,crop:{l:0,t:0,r:0,b:0}};h.scale=m/Math.min(f/d.width,p/d.height),this._drawLayer(h,n);let g=this._blurInto(u.tex,this._target(`bgA`,.25),this._target(`bgB`,.25),1+(i.blur??.5)*3);this._into(a),r.disable(r.BLEND),this._copy(g.tex)}render(e,{settings:t,time:n=0}={}){if(this.lost)return!1;let r=this.gl;this.frame++,r.bindVertexArray(this.vao),r.disable(r.DEPTH_TEST),this._background(e,t,n);let i=this._target(`acc0`),a=this._target(`acc1`),o=()=>{let e=i;i=a,a=e};for(let t of e)if(t.kind===`media`||t.kind===`text`||t.kind===`sticker`){let e=Je[t.blend]||0;if(e===0)this._into(i),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),this._drawVisual(t,n);else{let s=this._target(`layer`);this._into(s),r.disable(r.BLEND),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),this._drawVisual(t,n),r.disable(r.BLEND),this._into(a);let c=this._use(this._program(`blend`,D,qe));this._bindTex(0,i.tex),this._bindTex(1,s.tex),this._seti(c,`u_dst`,0),this._seti(c,`u_src`,1),this._seti(c,`u_mode`,e),this._fullPass(c),o()}}else if(t.kind===`transition`){let e=this._target(`trA`),a=this._target(`trB`);for(let[i,o]of[[e,t.from],[a,t.to]])this._into(i),r.disable(r.BLEND),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),this._drawVisual(o,n);this._into(i),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA);let o=this._use(this._transitionProgram(t.id));this._bindTex(0,e.tex),this._bindTex(1,a.tex),this._seti(o,`u_from`,0),this._seti(o,`u_to`,1),this._set(o,`u_progress`,t.progress),this._set(o,`u_res`,this.width,this.height),this._fullPass(o)}else if(t.kind===`filter`||t.kind===`adjust`){this._into(a),r.disable(r.BLEND);let e=this._use(this._program(`grade`,D,Ke)),s=t.kind===`filter`?zr(null,{id:t.filter,intensity:t.intensity}):zr(t.adjust,null,t.grade);this._setGrade(e,s,n),this._set(e,`u_mix`,1),this._set(e,`u_texel`,1/i.w,1/i.h),this._bindTex(0,i.tex),this._seti(e,`u_tex`,0),this._fullPass(e),o()}else if(t.kind===`effect`){let e=t.duration??t.clip?.duration??0;nr(this,t.effect,t.params,i,a,{time:t.local/1e6,duration:e/1e6})&&o()}return this._into(null),r.disable(r.BLEND),this._copy(i.tex),this._gcTextures(),!0}readPixels(){let e=this.gl,t=this.width,n=this.height,r=new Uint8Array(t*n*4);e.bindFramebuffer(e.FRAMEBUFFER,null),e.readPixels(0,0,t,n,e.RGBA,e.UNSIGNED_BYTE,r);let i=new Uint8ClampedArray(r.length),a=t*4;for(let e=0;e<n;e++)i.set(r.subarray((n-1-e)*a,(n-e)*a),e*a);return{width:t,height:n,data:i}}dispose(){let e=this.gl;this._freeTargets(),ir(this),this._matteCache?.dispose(),this._faceCache?.dispose(),this._hairCache?.dispose();for(let t of[...this.curveTextures.values(),...this.lutTextures.values()])e.deleteTexture(t.tex);this.curveTextures.clear(),this.lutTextures.clear();for(let t of this.textures.values())e.deleteTexture(t.tex);this.textures.clear();for(let t of this.programs.values())e.deleteProgram(t.prog);this.programs.clear(),e.getExtension(`WEBGL_lose_context`)?.loseContext()}},Hr=e({AUDIO_BITRATE:()=>X,AUDIO_FORMATS:()=>Y,BITRATE_LEVELS:()=>Gr,CODEC_HOME:()=>Kr,CONTAINERS:()=>J,DEFAULT_SETTINGS:()=>Xr,FRAME_RATES:()=>Wr,RESOLUTIONS:()=>Ur,VIDEO_CODECS:()=>q,audioCodecFor:()=>ti,describeError:()=>oi,detectCapabilities:()=>ri,estimateSize:()=>ei,exportProject:()=>bi,formatBytes:()=>ai,frameCount:()=>Qr,frameTime:()=>$r,outputSize:()=>Zr,reconcile:()=>ni,renderFrames:()=>Ci,renderStill:()=>gi,safeFileName:()=>ii,videoBitrate:()=>Q}),Ur=[{value:480,label:`480p`},{value:720,label:`720p`},{value:1080,label:`1080p`},{value:1440,label:`2K`},{value:2160,label:`4K`}],Wr=[24,25,30,50,60],Gr=[{value:`small`,label:`Smaller file`},{value:`balanced`,label:`Balanced`},{value:`high`,label:`High quality`},{value:`custom`,label:`Custom`}],q=[{value:`avc`,label:`H.264`},{value:`hevc`,label:`HEVC`},{value:`vp9`,label:`VP9`},{value:`av1`,label:`AV1`}],J={mp4:{label:`MP4`,ext:`mp4`,mime:`video/mp4`,video:[`avc`,`hevc`,`av1`],audio:[`aac`,`opus`]},mov:{label:`MOV`,ext:`mov`,mime:`video/quicktime`,video:[`avc`,`hevc`],audio:[`aac`]},webm:{label:`WebM`,ext:`webm`,mime:`video/webm`,video:[`vp9`,`av1`],audio:[`opus`]}},Y={wav:{label:`WAV`,ext:`wav`,mime:`audio/wav`,codec:null},m4a:{label:`M4A (AAC)`,ext:`m4a`,mime:`audio/mp4`,codec:`aac`},ogg:{label:`OGG (Opus)`,ext:`ogg`,mime:`audio/ogg`,codec:`opus`},flac:{label:`FLAC`,ext:`flac`,mime:`audio/flac`,codec:`flac`}},Kr={avc:`mp4`,hevc:`mp4`,av1:`mp4`,vp9:`webm`},qr={avc:1,hevc:.6,vp9:.65,av1:.5},Jr={small:.5,balanced:1,high:2},Yr=.16,X={aac:192e3,opus:16e4},Xr=Object.freeze({name:``,destination:`device`,video:!0,resolution:1080,bitrate:`balanced`,customMbps:12,codec:`avc`,format:`mp4`,fps:30,includeAudio:!0,audio:!1,audioFormat:`wav`}),Z=e=>Math.max(2,Math.round(e/2)*2);function Zr(e,t,n){let r=n/Math.min(e,t);return{width:Z(e*r),height:Z(t*r)}}function Q({width:e,height:t,fps:n,codec:r=`avc`,level:i=`balanced`,customMbps:a=12}){if(i===`custom`)return Math.max(1e5,Math.round(a*1e6));let o=(n/30)**.7,s=e*t*30*Yr*o*(qr[r]??1)*(Jr[i]??1);return Math.max(2e5,Math.round(s/1e3)*1e3)}function Qr(e,t){return e<=0?0:Math.max(1,Math.ceil(e*t/T-1e-6))}function $r(e,t,n=0){return n+Math.round(e*T/t)}function ei(e,t,{projW:n=1920,projH:r=1080}={}){let i=t/T,a=0;if(e.video){let{width:t,height:o}=Zr(n,r,e.resolution),s=Q({width:t,height:o,fps:e.fps,codec:e.codec,level:e.bitrate,customMbps:e.customMbps}),c=e.includeAudio&&X[ti(e.format)]||0;a+=(s*.95+c)*i/8*1.01}if(e.audio){let t=Y[e.audioFormat];t?.codec?t.codec===`flac`?a+=i*48e3*2*2*.6:a+=X[t.codec]*i/8*1.02:a+=44+Math.round(i*48e3)*2*2}return Math.round(a)}function ti(e,t){let n=J[e]?.audio||[];return t?n.find(e=>t.includes(e))||null:n[0]||null}function ni(e,t,n=`format`){let r={...e},i=e=>!t||t.video.includes(e);if(J[r.format]||(r.format=`mp4`),n===`codec`&&i(r.codec)&&!J[r.format].video.includes(r.codec)&&(r.format=Kr[r.codec]||Object.keys(J).find(e=>J[e].video.includes(r.codec))||r.format),!J[r.format].video.includes(r.codec)||!i(r.codec)){let e=J[r.format].video.find(i);if(e)r.codec=e;else for(let[e,t]of Object.entries(J)){let n=t.video.find(i);if(n){r.format=e,r.codec=n;break}}}return t&&!t.audioFormats?.includes(r.audioFormat)&&(r.audioFormat=t.audioFormats?.[0]||`wav`),r}async function ri({width:e=1920,height:t=1080,fps:n=30}={}){let r=[];await Promise.all(q.map(async({value:i})=>{let a=Q({width:e,height:t,fps:n,codec:i});await me(i,{width:e,height:t,bitrate:a,frameRate:n}).catch(()=>!1)&&r.push(i)}));let i=[];await Promise.all([`aac`,`opus`,`flac`].map(async e=>{await ge(e,{numberOfChannels:2,sampleRate:48e3,bitrate:X[e]||128e3}).catch(()=>!1)&&i.push(e)}));let a=(e,t)=>t.filter(t=>e.includes(t)),o=Object.entries(Y).filter(([,e])=>!e.codec||i.includes(e.codec)).map(([e])=>e);return{video:a(r,q.map(e=>e.value)),audio:a(i,[`aac`,`opus`,`flac`]),audioFormats:o}}function ii(e,t=`Untitled`){return(String(e||``).replace(/[\\/:*?"<>|\u0000-\u001f]+/g,`-`).replace(/\s+/g,` `).trim().replace(/^\.+/,``)||t).slice(0,120)}function ai(e){return!Number.isFinite(e)||e<=0?`0 KB`:e<1048576?`${Math.max(1,Math.round(e/1024))} KB`:e<1024**3?`${(e/1024**2).toFixed(+(e<10*1024**2))} MB`:`${(e/1024**3).toFixed(2)} GB`}function oi(e,t={}){if(e?.name===`AbortError`)return`Export canceled.`;let n=String(e?.message||e||``),r=q.find(e=>e.value===t.codec)?.label||t.codec;return e instanceof RangeError||/out of memory|allocation|array buffer/i.test(n)||e?.name===`QuotaExceededError`?`The export ran out of memory or storage space. Try a lower resolution, a shorter project, or free up disk space.`:/not supported|unsupported|NotSupportedError|EncodingError|configure/i.test(n)||e?.name===`NotSupportedError`?`This browser could not encode ${r||`the video`} at this resolution. Try H.264, a lower resolution or another format.`:/WebGL/i.test(n)?`The graphics context was lost or WebGL2 is unavailable, so frames could not be rendered.`:/decod/i.test(n)?`A media file could not be decoded: ${n}`:n?`Export failed: ${n}`:`Export failed for an unknown reason.`}var si=()=>new DOMException(`Export canceled`,`AbortError`),$=typeof MessageChannel<`u`?new MessageChannel:null,ci=[];$&&($.port1.onmessage=()=>ci.shift()?.());function li(){return globalThis.scheduler?.yield?globalThis.scheduler.yield():$?new Promise(e=>{ci.push(e),$.port2.postMessage(0)}):new Promise(e=>setTimeout(e,0))}function ui(e,t){if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(e,t);let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}async function di(e){if(typeof document>`u`||!document.fonts)return;let t=new Set;for(let n of ne(e).tracks)for(let e of n.clips)e.type===`text`&&e.style&&t.add(r(e.style,32));await Promise.all([...t].map(e=>document.fonts.load(e).catch(()=>null)))}var fi=class{constructor(e,t){this.clip=e,this.track=t,this.iter=null,this.cur=null,this.next=null,this.ended=!1,this.shown={of:null,frame:null,version:0,rot:null},this.after={of:null,frame:null,version:0,rot:null}}async _pull(){if(this.ended)return null;let e=await this.iter.next();return e.done?(this.ended=!0,null):e.value}async at(e,t=null){if(!this.iter){let t=await this.track.getFirstTimestamp().catch(()=>0),n=new ce(this.track);this.iter=n.samples(Math.max(t,e)),this.cur=await this._pull(),this.next=await this._pull()}for(;this.next&&this.next.timestamp<=e+1e-6;)this.cur?.close(),this.cur=this.next,this.next=await this._pull();let n=this.cur||this.next;if(!n)return null;let r=this._info(this.shown,n,`vid:${this.clip.id}`);if(t&&this.cur&&this.next){let n=C(e,this.cur.timestamp,this.next.timestamp),i=()=>this._info(this.after,this.next,`vid:${this.clip.id}:next`);if(n>=.999)return i();S(n)&&(r.between={mode:t,frac:n,next:i()})}return r}_info(e,t,n){if(e.of!==t){if(this._release(e),e.of=t,e.version++,t.rotation||t.flip){let n=t.displayWidth,r=t.displayHeight;(!e.rot||e.rot.width!==n||e.rot.height!==r)&&(e.rot=ui(n,r)),t.draw(e.rot.getContext(`2d`),0,0,n,r),e.frame=e.rot}else e.frame=t.toVideoFrame()}return{key:n,source:e.frame,width:t.displayWidth,height:t.displayHeight,version:e.version}}_release(e){e.frame&&e.frame!==e.rot&&e.frame.close?.(),e.frame=null,e.of=null}async close(){this._release(this.shown),this._release(this.after),this.cur?.close(),this.next?.close(),this.cur=this.next=null;try{await this.iter?.return?.()}catch{}this.iter=null}},pi=class{constructor(e,t){this.project=e,this.library=t,this.inputs=new Map,this.clips=new Map,this.images=new Map,this.used=new Set,this.resolved=new Map}_input(e){let t=this.inputs.get(e.id);return t||(t=(async()=>{let t=await this.library.mediaBlob(e),n=new se({source:new oe(t),formats:ue}),r=await n.getPrimaryVideoTrack();if(!r)throw Error(`${e.name} has no video track`);if(!await r.canDecode())throw Error(`${e.name} cannot be decoded in this browser`);return{input:n,track:r}})(),this.inputs.set(e.id,t)),t}async _image(e){let t=this.images.get(e.id);if(!t){let n=await this.library.mediaBlob(e);t=await createImageBitmap(n,{imageOrientation:`flipY`}),this.images.set(e.id,t)}return t}async prepare(e){this.used.clear(),this.resolved.clear();let t=async e=>{if(e.kind===`transition`){await t(e.from),await t(e.to);return}if(e.kind!==`media`||!e.asset)return;let{clip:n,asset:r}=e;if(n.type===`image`){let e=await this._image(r);this.resolved.set(n.id,{key:`img:${r.id}`,source:e,width:e.width,height:e.height,version:1});return}let i=this.clips.get(n.id);if(!i){let{track:e}=await this._input(r);i=new fi(n,e),this.clips.set(n.id,i)}this.used.add(n.id);let a=await i.at(e.sourceTime/T,e.smoothSlow||null);a&&this.resolved.set(n.id,a)};for(let n of e)await t(n)}async sweep(){for(let[e,t]of this.clips)this.used.has(e)||(await t.close(),this.clips.delete(e))}async dispose(){for(let e of this.clips.values())await e.close();this.clips.clear();for(let e of this.images.values())e.close?.();this.images.clear();for(let e of this.inputs.values())(await e.catch(()=>null))?.input.dispose();this.inputs.clear()}},mi=class{constructor(e,t,n,r){this.project=e,this.width=n,this.height=r;let{width:a,height:o}=e.settings;this.canvas=ui(n,r),this.media=new pi(e,t),this.text=new i,this.scale=n/a,this.compositor=new Vr(this.canvas,{resolve:e=>this._resolve(e),preserveDrawingBuffer:!0}),this.compositor.resize(n,r,a,o)}_resolve(e){return e.kind===`text`||e.kind===`sticker`?this.text.get(e,this.scale):e.kind===`media`&&this.media.resolved.get(e.clip.id)||null}async render(e){let t=re(this.project,e);if(await this.media.prepare(t),!this.compositor.render(t,{settings:this.project.settings,time:e/1e6}))throw Error(`WebGL context lost while rendering`);await this.media.sweep()}async dispose(){await this.media.dispose(),this.compositor.dispose()}};async function hi(e,t=360){if(typeof createImageBitmap!=`function`)return null;let n=Math.min(t,e.width),r=Math.max(2,Math.round(e.height*n/e.width));return createImageBitmap(e,{resizeWidth:n,resizeHeight:r,resizeQuality:`medium`}).catch(()=>null)}async function gi(e,t,n=0,{maxWidth:r=640}={}){let i=structuredClone(e),{width:a,height:o}=i.settings,s=Math.min(1,r/a),c=new mi(i,t,Z(a*s),Z(o*s));try{return await di(i),await dt(i,t).catch(()=>{}),await Jn(i),await c.render(Math.max(0,n)),await createImageBitmap(c.canvas)}finally{await c.dispose()}}var _i=419430400,vi=new Set;async function yi(e,t){if((t===`file`||t!==`memory`&&e>_i)&&navigator.storage?.getDirectory)try{let e=await(await navigator.storage.getDirectory()).getDirectoryHandle(`video-studio-exports`,{create:!0});for await(let t of e.keys())vi.has(t)||await e.removeEntry(t).catch(()=>{});let t=`export-${Date.now()}-${Math.random().toString(36).slice(2,8)}.bin`;vi.add(t);let n=await e.getFileHandle(t,{create:!0});if(n.createWritable){let r=await n.createWritable();return{kind:`file`,target:new pe(r,{chunked:!0}),async result(e){let t=await n.getFile();return new Blob([t],{type:e})},async discard(){await r.abort?.().catch(()=>{}),await e.removeEntry(t).catch(()=>{}),vi.delete(t)}}}}catch{}let n=new Ce;return{kind:`memory`,target:n,async result(e){return new Blob([n.buffer],{type:e})},async discard(){}}}async function bi(e,t,n,{kind:r=`video`,onProgress:i,signal:a,target:o}={}){let s=structuredClone(e),c={...Xr,...n},u=l(s);if(u<=0)throw Error(`The timeline is empty. Add some media before exporting.`);if(a?.aborted)throw si();let d=ii(c.name||s.name);return r===`audio`?Si(s,t,c,u,d,{onProgress:i,signal:a,forceTarget:o}):xi(s,t,c,u,d,{onProgress:i,signal:a,forceTarget:o})}async function xi(e,t,n,r,i,{onProgress:a,signal:o,forceTarget:s}){let c=J[n.format];if(!c)throw Error(`Unknown format ${n.format}`);if(!c.video.includes(n.codec))throw Error(`${n.codec} cannot go in ${c.label}`);let l=n.fps,{width:u,height:d}=Zr(e.settings.width,e.settings.height,n.resolution),f=Q({width:u,height:d,fps:l,codec:n.codec,level:n.bitrate,customMbps:n.customMbps}),p=Qr(r,l);if(!await me(n.codec,{width:u,height:d,bitrate:f,frameRate:l}).catch(()=>!1)){let e=q.find(e=>e.value===n.codec)?.label||n.codec;throw Error(`This browser cannot encode ${e} at ${u}x${d} (not supported). Try a lower resolution or another codec.`)}let m=await me(n.codec,{width:u,height:d,bitrate:f,frameRate:l,hardwareAcceleration:`prefer-hardware`}).catch(()=>!1),h=null;if(n.includeAudio&&ie(e).length){for(let e of c.audio)if(await ge(e,{numberOfChannels:2,sampleRate:48e3,bitrate:X[e]}).catch(()=>!1)){h=e;break}}let g=48e3,_=Math.round(r*g/T),v=await yi(ei({...n,audio:!1},r,{projW:e.settings.width,projH:e.settings.height}),s),y=v.kind===`file`,b=n.format===`webm`?new ve:n.format===`mov`?new be({fastStart:y?`reserve`:`in-memory`}):new he({fastStart:y?`reserve`:`in-memory`}),x=new Se({format:b,target:v.target}),S=null,C=null,w=performance.now();try{S=new mi(e,t,u,d);let s=new fe(S.canvas,{codec:n.codec,quality:new ye({bitrate:f,bitrateMode:`variable`}),keyFrameInterval:2,latencyMode:`quality`,hardwareAcceleration:m?`prefer-hardware`:`no-preference`});x.addVideoTrack(s,{frameRate:l,maximumPacketCount:p+2});let y=null;h&&(y=new xe({codec:h,quality:new ye({bitrate:X[h]})}),x.addAudioTrack(y,{maximumPacketCount:Math.ceil(_/480)+64})),x.setMetadataTags({title:n.name||e.name,date:new Date}),await x.start(),await di(e),await dt(e,t).catch(()=>{}),await Jn(e);let b=0,ee=!y;y&&(C=Ee(e,t,{end:r,sampleRate:g,channels:2,signal:o}));let te=async e=>{for(;!ee&&b<e;){let e=await C.next();if(e.done){ee=!0;break}let{channels:t,frames:n}=e.value,r=new Float32Array(n*t.length);t.forEach((e,t)=>r.set(e,t*n));let i=new le({data:r,format:`f32-planar`,numberOfChannels:t.length,sampleRate:g,timestamp:b});await y.add(i),i.close(),b+=n/g}},ne=0,re=performance.now(),ie=0;for(let e=0;e<p;e++){if(o?.aborted)throw si();let t=$r(e,l);await te(t/T+1),await S.render(t),await s.add(e/l,1/l);let n=performance.now();if(a&&(n-ie>100||e===p-1)){ie=n;let t=(n-w)/1e3,r=e+1,i={phase:`video`,done:r,total:p,fraction:r/p,elapsed:t,remaining:t/r*(p-r),fps:r/Math.max(.001,t)};(n-ne>500||e===0)&&(ne=n,i.preview=await hi(S.canvas)),a(i)}n-re>12&&(await li(),re=performance.now())}await te(1/0),s.close(),y?.close(),a?.({phase:`finalizing`,done:p,total:p,fraction:1,elapsed:(performance.now()-w)/1e3,remaining:0}),await x.finalize();let ae=c.mime,oe=await v.result(ae),se=(performance.now()-w)/1e3;return{kind:`video`,blob:oe,release:()=>v.discard(),fileName:`${i}.${c.ext}`,mimeType:ae,width:u,height:d,frames:p,duration:r,elapsed:se,fps:p/se,codec:n.codec,audioCodec:h,bitrate:f,hardware:m}}catch(e){throw x.state!==`finalized`&&x.state!==`canceled`&&await x.cancel().catch(()=>{}),await v.discard(),e}finally{await C?.return?.().catch(()=>{}),await S?.dispose().catch(()=>{})}}async function Si(e,t,n,r,i,{onProgress:a,signal:o,forceTarget:s}){let c=Y[n.audioFormat];if(!c)throw Error(`Unknown audio format ${n.audioFormat}`);let l=48e3,u=performance.now(),d=({done:e,total:t})=>{let n=(performance.now()-u)/1e3;a?.({phase:`audio`,done:e,total:t,fraction:t?e/t:1,elapsed:n,remaining:e?n/e*(t-e):0})},f=null,p=e=>{let t=(performance.now()-u)/1e3;return{kind:`audio`,blob:e,release:()=>f?.discard(),fileName:`${i}.${c.ext}`,mimeType:c.mime,frames:0,duration:r,elapsed:t}};if(!c.codec){let n=Math.round(r*l/T),i=[we(n,2,l)];for await(let n of Ee(e,t,{end:r,sampleRate:l,channels:2,signal:o,onProgress:d}))i.push(Te(n.channels)),await li();return p(new Blob(i,{type:c.mime}))}if(!await ge(c.codec,{numberOfChannels:2,sampleRate:l}).catch(()=>!1))throw Error(`This browser cannot encode ${c.label} audio (not supported). Choose WAV instead.`);f=await yi(0,s);let m=n.audioFormat===`m4a`?new he({fastStart:f.kind!==`file`&&`in-memory`}):n.audioFormat===`ogg`?new de:new _e,h=new Se({format:m,target:f.target});try{let i=new xe({codec:c.codec,quality:new ye({bitrate:X[c.codec]||192e3})});h.addAudioTrack(i),h.setMetadataTags({title:n.name||e.name,date:new Date}),await h.start();let a=0;for await(let n of Ee(e,t,{end:r,sampleRate:l,channels:2,signal:o,onProgress:d})){let e=new Float32Array(n.frames*2);n.channels.forEach((t,r)=>e.set(t,r*n.frames));let t=new le({data:e,format:`f32-planar`,numberOfChannels:2,sampleRate:l,timestamp:a});await i.add(t),t.close(),a+=n.frames/l,await li()}return i.close(),await h.finalize(),p(await f.result(c.mime))}catch(e){throw h.state!==`finalized`&&h.state!==`canceled`&&await h.cancel().catch(()=>{}),await f.discard(),e}}async function*Ci(e,t,{width:n,height:r,fps:i,start:a=0,end:o,signal:s}={}){let c=structuredClone(e),u=o??l(c),d=Math.max(1,Qr(u-a,i)),f=new mi(c,t,Z(n),Z(r));try{await di(c);for(let e=0;e<d;e++){if(s?.aborted)throw si();await f.render(Math.min(u-1,a+Math.round(e*T/i))),yield{canvas:f.canvas,index:e,total:d}}}finally{await f.dispose()}}export{Wt as A,kt as B,un as C,rn as D,on as E,Dt as F,ut as G,st as H,wt as I,ot as J,ft as K,At as L,Ct as M,Tt as N,an as O,Et as P,St as R,fn as S,pn as T,dt as U,mt as V,at as W,gi as _,Wr as a,Vr as b,oi as c,bi as d,Hr as f,Ci as g,ni as h,Xr as i,jt as j,sn as k,ri as l,Zr as m,Gr as n,Ur as o,ai as p,ct as q,J as r,q as s,Y as t,ei as u,ii as v,dn as w,Yn as x,Q as y,Ot as z};