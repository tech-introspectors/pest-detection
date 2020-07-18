$(function () {
            $("#toggle").on({

                    click: function () {
                        $("#topNavBar").css({
                                width: "250px",
                                transitionDuration: "0.5s"
                            },
                            click: function () {
                                $("#topNavBar").css({
                                    width: "0px",
                                    transitionDuration: "0.5s"
                                });

                            });

                    });
            });
