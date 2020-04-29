import React from 'react';

export function PIN() {
    return (
        <div>
            <form>
                <div class="form-group row">
                    <label for="inputPIN" class="col-sm-2 col-form-label">PIN</label>
                    <div class="col-sm-3">
                        <input type="password" class="form-control" id="inputPIN" placeholder="Enter PIN" />
                    </div>
                </div>
            </form>
        </div>
    );
}