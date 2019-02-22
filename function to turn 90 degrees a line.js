function rotat(x1,y1, x2,y2, angle) {//angle in radians
    let a = [];
    let b = [];
    let angle_degrees = angle;
    // angle_radians = angle_degrees*PI/180; //to turn to degrees
    a[0]= x1;
    a[1]= y1;
    b[0]= x2;
    b[1]= y2;                       
    // a and b are arrays of length 2 with the x, y coordinate of
    // your segments extreme points with the form [x, y]

    midpoint = [
        (a[0] + b[0])/2,
        (a[1] + b[1])/2
    ]

    // Make the midpoint the origin
    a_mid = [
        a[0] - midpoint[0],
        a[1] - midpoint[1]
    ]
    b_mid = [
        b[0] - midpoint[0],
        b[1] - midpoint[1]
    ]

    // Use the rotation matrix from the paper you mentioned
    a_rotated = [
        cos(angle)*a_mid[0] - sin(angle)*a_mid[1],
        sin(angle)*a_mid[0] + cos(angle)*a_mid[1]
    ]
    b_rotated = [
        cos(angle)*b_mid[0] - sin(angle)*b_mid[1],
        sin(angle)*b_mid[0] + cos(angle)*b_mid[1]
    ]

    // Then add the midpoint coordinates to return to previous origin
    a_rotated[0] = a_rotated[0] + midpoint[0]
    a_rotated[1] = a_rotated[1] + midpoint[1]
    b_rotated[0] = b_rotated[0] + midpoint[0]
    b_rotated[1] = b_rotated[1] + midpoint[1]

    // And the rotation is now done
    //return [a_rotated, b_rotated]
  	line(a_rotated[0],a_rotated[1],b_rotated[0],b_rotated[1])
}